const theme = require("../theme");

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = {
  'peekView.border': theme.transparent,
  'peekViewEditor.background': theme.blackLighter,
  'peekViewEditorGutter.background': theme.blackLightest,
  'peekViewEditor.matchHighlightBackground': theme.yellowDarker,
  'peekViewEditor.matchHighlightBorder': theme.transparent,
  'peekViewResult.background': theme.blackDarker,
  'peekViewResult.fileForeground': theme.whiteDarker,
  'peekViewResult.lineForeground': theme.whiteDarker,
  'peekViewResult.matchHighlightBackground': theme.yellowDarker,
  'peekViewResult.selectionBackground': theme.blackDarkest,
  'peekViewResult.selectionForeground': theme.whiteDarkest,
  'peekViewTitle.background': theme.blackDarkest,
  'peekViewTitleDescription.foreground': theme.grayDarkest,
  'peekViewTitleLabel.foreground': theme.whiteDarkest,
};
