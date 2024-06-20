const fs = require('fs');
const htmlMin = require('html-minifier');
const yaml = require('js-yaml');
const lightningcss = require('lightningcss');
const packageJSON = require('./package.json');
const esbuild = require('esbuild');

module.exports = function (eleventyConfig) {
  const collections = {
    notes: 'src/notes/*/index.md',
  };

  eleventyConfig.addCollection('notes', (collectionApi) => {
    return collectionApi.getFilteredByGlob(collections.notes);
  });

  eleventyConfig.addTransform('html-minify', (content, path) => {
    if (path && path.endsWith('.html')) {
      return htmlMin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        includeAutoGeneratedTags: false,
        removeComments: true,
      });
    }
    return content;
  });

  eleventyConfig.addDataExtension('yml', (contents) => {
    return yaml.load(contents);
  });

  const styles = [
    './src/styles/index.css',
    './src/styles/light.css',
    './src/styles/dark.css',
  ];

  const processStyles = async (path) => {
    return await lightningcss.bundle({
      filename: path,
      minify: true,
      sourceMap: false,
      targets: lightningcss.browserslistToTargets(packageJSON.browserslist),
      include:
        lightningcss.Features.MediaQueries | lightningcss.Features.Nesting,
    });
  };

  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (!styles.includes(path)) {
        return;
      }

      return async () => {
        let { code } = await processStyles(path);
        return code;
      };
    },
  });

  eleventyConfig.addFilter('css', async (path) => {
    let { code } = await processStyles(path);
    return code;
  });

  // JavaScript
  eleventyConfig.addTemplateFormats('js');

  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    compile: async (content, path) => {
      if (
        path !== './src/scripts/index.js' &&
        path !== './src/scripts/note.js'
      ) {
        return;
      }

      return async () => {
        let { outputFiles } = await esbuild.build({
          target: 'es2020',
          entryPoints: [path],
          minify: true,
          bundle: true,
          write: false,
        });

        return outputFiles[0].text;
      };
    },
  });

  [
    'src/index.html',
    'src/styles/index.css',
    'src/fonts',
    'src/assets',
    'src/notes/**/*.!(md|yml)',
  ].forEach((path) => eleventyConfig.addPassthroughCopy(path));

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk'],
  };
};
