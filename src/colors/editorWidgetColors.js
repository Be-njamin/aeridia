const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  'editorWidget.foreground': theme.whiteDarker,
  'editorWidget.background': theme.blackDarkest,
  'editorWidget.border': theme.transparent,
  'editorWidget.resizeBorder': theme.blackLighter,
  'editorSuggestWidget.background': theme.blackDarker,
  'editorSuggestWidget.border': theme.transparent,
  'editorSuggestWidget.foreground': theme.whiteDarker,
  'editorSuggestWidget.focusHighlightForeground': theme.whiteLightest,
  'editorSuggestWidget.highlightForeground': theme.whiteLighter,
  'editorSuggestWidget.selectedBackground': theme.blackLighter,
  'editorSuggestWidget.selectedForeground': theme.whiteDarkest,
  'editorSuggestWidget.selectedIconForeground': theme.whiteDarkest,
  'editorHoverWidget.foreground': theme.whiteDarker,
  'editorHoverWidget.background': theme.blackDarker,
  'editorHoverWidget.border': theme.transparent,
  'editorHoverWidget.statusBarBackground': theme.blackDarker,
  'editorGhostText.border': theme.transparent,
  'editorGhostText.foreground': theme.grayDarker,
  'debugExceptionWidget.background': theme.yellowDarker,
  'debugExceptionWidget.border': theme.transparent,
  'editorMarkerNavigation.background': theme.blackDarker,
  'editorMarkerNavigationError.background': theme.redDarker,
  'editorMarkerNavigationWarning.background': theme.yellowDarker,
  'editorMarkerNavigationInfo.background': theme.blueDarker
};
