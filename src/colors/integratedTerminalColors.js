const theme = require('../theme');

// Integrated Terminal Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors

module.exports = {
  'terminal.background': theme.blackDarker,
  'terminal.border': theme.transparent,
  'terminal.foreground': theme.whiteDarkest,
  'terminal.ansiBlack': theme.black,
  'terminal.ansiBrightBlack': theme.blackLightest,
  'terminal.ansiBlue': theme.blue,
  'terminal.ansiBrightBlue': theme.blueLighter,
  'terminal.ansiCyan': theme.cyan,
  'terminal.ansiBrightCyan': theme.cyanLighter,
  'terminal.ansiGreen': theme.green,
  'terminal.ansiBrightGreen': theme.greenLighter,
  'terminal.ansiMagenta': theme.magenta,
  'terminal.ansiBrightMagenta': theme.magentaLighter,
  'terminal.ansiRed': theme.red,
  'terminal.ansiBrightRed': theme.redLighter,
  'terminal.ansiWhite': theme.white,
  'terminal.ansiBrightWhite': theme.whiteLightest,
  'terminal.ansiYellow': theme.yellow,
  'terminal.ansiBrightYellow': theme.yellowLighter,
  'terminal.selectionBackground': `${theme.grayLightest}${theme.hexAlpha_020}`,
  'terminalCursor.background': theme.black,
  'terminalCursor.foreground': theme.whiteDarkest,
  'terminal.dropBackground': `${theme.blackDarker}${theme.hexAlpha_040}`,
  'terminal.tab.activeBorder': theme.transparent
};
