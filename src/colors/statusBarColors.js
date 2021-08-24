const theme = require('../theme');

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = {
  'statusBar.background': theme.blackDarkest,
  'statusBar.foreground': theme.whiteDarker,
  'statusBar.border': theme.transparent,
  'statusBar.debuggingBackground': theme.magentaDarker,
  'statusBar.debuggingForeground': theme.whiteDarkest,
  'statusBar.debuggingBorder': theme.transparent,
  'statusBar.noFolderBackground': theme.cyanDarker,
  'statusBar.noFolderForeground': theme.whiteDarkest,
  'statusBar.noFolderBorder': theme.transparent,
  'statusBarItem.activeBackground': `${theme.black}${theme.hexAlpha_060}`,
  'statusBarItem.hoverBackground': `${theme.black}${theme.hexAlpha_020}`,
  'statusBarItem.prominentForeground': theme.white,
  'statusBarItem.prominentBackground': `${theme.black}${theme.hexAlpha_060}`,
  'statusBarItem.prominentHoverBackground': `${theme.black}${theme.hexAlpha_080}`,
  'statusBarItem.remoteBackground': theme.blueDarker,
  'statusBarItem.remoteForeground': theme.white,
  'statusBarItem.errorBackground': theme.redDarker,
  'statusBarItem.errorForeground': theme.whiteDarker,
  'statusBarItem.warningBackground': theme.yellowDarker,
  'statusBarItem.warningForeground': theme.whiteDarker
};
