const theme = require("../theme");

// Lists and Trees
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees

module.exports = {
  'list.activeSelectionBackground': `${theme.blackLighter}${theme.hexAlpha_050}`,
  'list.activeSelectionForeground': theme.white,
  'list.activeSelectionIconForeground': theme.whiteLightest,
  'list.dropBackground': theme.blackDarkest,
  'list.focusBackground': `${theme.black}${theme.hexAlpha_050}`,
  'list.focusForeground': theme.whiteDarker,
  'list.focusHighlightForeground': theme.white,
  'list.focusOutline': theme.transparent,
  'list.highlightForeground': theme.white,
  'list.hoverBackground': `${theme.blackLightest}${theme.hexAlpha_050}`,
  'list.hoverForeground': theme.whiteDarkest,
  'list.inactiveSelectionBackground': `${theme.blackDarkest}${theme.hexAlpha_050}`,
  'list.inactiveSelectionForeground': theme.whiteDarkest,
  'list.inactiveSelectionIconForeground': theme.whiteDarker,
  'list.inactiveFocusBackground': `${theme.blackDarkest}${theme.hexAlpha_050}`,
  'list.inactiveFocusOutline': theme.transparent,
  'list.invalidItemForeground': theme.redDarker,
  'list.errorForeground': theme.redDarker,
  'list.warningForeground': theme.yellowDarker,
  'listFilterWidget.background': theme.whiteDarkest,
  'listFilterWidget.outline': theme.transparent,
  'listFilterWidget.noMatchesOutline': theme.transparent,
  'list.filterMatchBackground': theme.transparent,
  'list.filterMatchBorder': theme.whiteDarkest,
  'list.deemphasizedForeground': theme.redDarker,
  'tree.indentGuidesStroke': theme.grayDarkest,
  'tree.tableColumnsBorder': theme.grayDarkest
};
