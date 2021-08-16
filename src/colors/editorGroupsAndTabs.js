const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  'editorGroup.border': `${theme.blackDarkest}${theme.hexAlpha_010}`,
  'editorGroup.dropBackground': `${theme.blackDarkest}${theme.hexAlpha_050}`,
  'editorGroupHeader.tabsBackground': theme.blackDarker,
  'editorGroupHeader.noTabsBackground': theme.blackDarker,
  'editorGroup.emptyBackground': `${theme.blackDarkest}${theme.hexAlpha_050}`,
  'tab.activeBackground': theme.blackDarkest,
  'tab.activeForeground': theme.whiteLightest,
  'tab.unfocusedActiveBackground': `${theme.blackDarkest}${theme.hexAlpha_080}`,
  'tab.unfocusedActiveForeground': `${theme.whiteLightest}${theme.hexAlpha_080}`,
  'tab.inactiveBackground': theme.black,
  'tab.inactiveForeground': theme.white,
  'tab.unfocusedInactiveBackground': `${theme.black}${theme.hexAlpha_080}`,
  'tab.unfocusedInactiveForeground': `${theme.white}${theme.hexAlpha_080}`,
  'tab.hoverBackground': theme.blackDarker,
  'tab.hoverForeground': theme.whiteLighter,
  'tab.unfocusedHoverBackground': `${theme.blackDarker}${theme.hexAlpha_080}`,
  'tab.unfocusedHoverForeground': `${theme.whiteLighter}${theme.hexAlpha_080}`,
  'editorGroup.focusedEmptyBorder': theme.transparent,
  'editorGroupHeader.border': theme.transparent,
  'editorGroupHeader.tabsBorder': theme.transparent,
  'tab.border': theme.transparent,
  'tab.hoverBorder': theme.transparent,
  'tab.activeBorder': theme.transparent,
  'tab.activeBorderTop': theme.transparent,
  'tab.unfocusedActiveBorder': theme.transparent,
  'tab.unfocusedActiveBorderTop': theme.transparent,
  'tab.lastPinnedBorder': theme.transparent,
  'tab.unfocusedHoverBorder': theme.transparent,
  'tab.activeModifiedBorder': theme.transparent,
  'tab.inactiveModifiedBorder': theme.transparent,
  'tab.unfocusedActiveModifiedBorder': theme.transparent,
  'tab.unfocusedInactiveModifiedBorder': theme.transparent,
  'editorPane.background': theme.black
};
