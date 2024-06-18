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
const themeMenuItems = document.querySelectorAll('.theme-menu__item');
const themeMenu = document.querySelector('.header__theme-submenu');
const buttons = document.querySelectorAll('.theme-menu__button');
const themeSwitcher = document.querySelector('.header__theme-control > button');

let showMenuStatus = false;

function handleButtonClick(event) {
  const theme = this.getAttribute('data-theme');
  switchMedia(theme);
  showMenuStatus = false;
  themeMenu.setAttribute('data-show', 'false');
  saveScheme(theme);
}

function setupSwitcher() {
  const scheme = getSavedScheme();
  if (scheme) {
    switchMedia(scheme);
  }

  // Add event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });

  themeSwitcher.addEventListener('click', (event) => {
    showMenuStatus = !showMenuStatus;
    if (showMenuStatus) {
      themeMenu.setAttribute('data-show', 'true');
    } else {
      themeMenu.setAttribute('data-show', 'false');
    }
  });
}

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === 'auto') {
    lightMedia = '(prefers-color-scheme: light)';
    darkMedia = '(prefers-color-scheme: dark)';
  } else if (scheme === 'light') {
    lightMedia = 'all';
    darkMedia = 'not all';
  } else if (scheme === 'dark') {
    lightMedia = 'not all';
    darkMedia = 'all';
  }

  themeMenuItems.forEach((item) => {
    if (item.getAttribute('data-theme') === scheme) {
      item.setAttribute('data-active', 'true');
    } else {
      item.setAttribute('data-active', 'false');
    }
  });

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
