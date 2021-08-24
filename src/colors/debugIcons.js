const theme = require('../theme');

// Debug Icons
// https://code.visualstudio.com/api/references/theme-color#debug-icons-colors

module.exports = {
  'debugIcon.breakpointForeground': theme.red,
  'debugIcon.breakpointDisabledForeground': theme.redDarker,
  'debugIcon.breakpointUnverifiedForeground': theme.redDarker,
  'debugIcon.breakpointCurrentStackframeForeground': theme.redLighter,
  'debugIcon.breakpointStackframeForeground': theme.redlightest,
  'debugIcon.startForeground': theme.green,
  'debugIcon.pauseForeground': theme.blue,
  'debugIcon.stopForeground': theme.red,
  'debugIcon.disconnectForeground': theme.magenta,
  'debugIcon.restartForeground': theme.green,
  'debugIcon.stepOverForeground': theme.blue,
  'debugIcon.stepIntoForeground': theme.blue,
  'debugIcon.stepOutForeground': theme.blue,
  'debugIcon.continueForeground': theme.green,
  'debugIcon.stepBackForeground': theme.blue,
  'debugConsole.infoForeground': theme.blue,
  'debugConsole.warningForeground': theme.yellow,
  'debugConsole.errorForeground': theme.red,
  'debugConsole.sourceForeground': theme.blue,
  'debugConsoleInputIcon.foreground': theme.magenta
};
