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

let showMenuStatus = false;

const themeMenu = document.querySelector('.header__theme-submenu');

// Select all buttons by the class
const buttons = document.querySelectorAll('.theme-menu__button');

// Function to handle the click event
function handleButtonClick(event) {
  const theme = this.getAttribute('data-theme');
  switchMedia(theme);
  showMenuStatus = false;
  themeMenu.setAttribute('data-show', 'false');
  saveScheme(theme);
}

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

const themeSwitcher = document.querySelector('.header__theme-control > button');

function setupSwitcher() {
  const scheme = getSavedScheme();
  if (scheme) {
    switchMedia(scheme);
  }
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
