const theme = require('../theme');

// Welcome Page
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page

module.exports = {
  'welcomePage.background': theme.black,
  'welcomePage.buttonBackground': theme.blackDarkest,
  'welcomePage.buttonHoverBackground': theme.blackLighter,
  'welcomePage.progress.background': theme.blackDarkest,
  'welcomePage.progress.foreground': theme.cyan,
  'welcomePage.tileBackground': theme.blackDarker,
  'welcomePage.tileHoverBackground': theme.blackLighter,
  'welcomePage.tileShadow': `${theme.blackDarker}${theme.hexAlpha_020}`,
  'walkThrough.embeddedEditorBackground': theme.blackDarkest
};
