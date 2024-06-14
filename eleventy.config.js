const fs = require('fs');
const htmlMin = require('html-minifier');
const yaml = require('js-yaml');
const postcss = require('postcss');
const postcssCsso = require('postcss-csso');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

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

  const styles = ['./src/styles/index.css'];

  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (!styles.includes(path)) {
        return;
      }

      return async () => {
        let output = await postcss([
          postcssImport,
          autoprefixer,
          //   postcssCsso,
        ]).process(content, {
          from: path,
        });

        return output.css;
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