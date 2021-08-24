const theme = require('../theme');

// Debug Colors
// https://code.visualstudio.com/api/references/theme-color#debug-colors

module.exports = {
  'debugToolBar.background': theme.blackDarkest,
  'debugToolBar.border': theme.transparent,
  'editor.stackFrameHighlightBackground': `${theme.yellowDarker}${theme.hexAlpha_040}`,
  'editor.focusedStackFrameHighlightBackground': `${theme.yellowDarker}${theme.hexAlpha_060}`,
  'editor.inlineValuesForeground': theme.whiteDarker,
  'editor.inlineValuesBackground': theme.blackDarkest,
  'debugView.exceptionLabelForeground': theme.redDarker,
  'debugView.exceptionLabelBackground': theme.blackDarkest,
  'debugView.stateLabelForeground': theme.cyan,
  'debugView.stateLabelBackground': theme.greenLightest,
  'debugView.valueChangedHighlight': `${theme.grayDarkest}${theme.hexAlpha_040}`,
  'debugTokenExpression.name': theme.yellowDarker,
  'debugTokenExpression.value': theme.grayDarker,
  'debugTokenExpression.string': theme.gray,
  'debugTokenExpression.boolean': theme.gray,
  'debugTokenExpression.number': theme.gray,
  'debugTokenExpression.error': theme.redDarker
};
