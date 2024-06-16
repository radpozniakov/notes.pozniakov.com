const lightStyle = document.querySelector(
  'style[media*=prefers-color-scheme][media*=light]',
);
const darkStyle = document.querySelector(
  'style[media*=prefers-color-scheme][media*=dark]',
);
const lightTheme = document.querySelector(
  'meta[name=theme-color][media*=prefers-color-scheme][media*=light]',
);
const darkTheme = document.querySelector(
  'meta[name=theme-color][media*=prefers-color-scheme][media*=dark]',
);

const themeSwitcher = document.querySelector('.header__theme-control > button');

function setupSwitcher() {
  themeSwitcher.addEventListener('click', (event) => {
    console.log('click theme switcher');
  });
}

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === 'auto') {
    lightMedia = '(prefers-color-scheme: light)';
    darkMedia = '(prefers-color-scheme: dark)';
  } else {
    lightMedia = scheme === 'light' ? 'all' : 'not all';
    darkMedia = scheme === 'dark' ? 'all' : 'not all';
  }

  lightStyle.media = lightMedia;
  darkStyle.media = darkMedia;

  lightTheme.media = lightMedia;
  darkTheme.media = darkMedia;
}

function getSavedScheme() {
  return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
  localStorage.setItem('color-scheme', scheme);
}

setupSwitcher();
// switchMedia('light');
