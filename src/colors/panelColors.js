const theme = require('../theme');

// Panel Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors

module.exports = {
  'panel.background': theme.black,
  'panel.border': theme.blackLighter,
  'panel.dropBorder': theme.transparent,
  'panelTitle.activeBorder': theme.whiteDarkest,
  'panelTitle.activeForeground': theme.whiteDarker,
  'panelTitle.inactiveForeground': theme.grayDarkest,
  'panelInput.border': theme.transparent,
  'panelSection.border': theme.transparent,
  'panelSection.dropBackground': theme.blackLighter,
  'panelSectionHeader.background': theme.blackDarker,
  'panelSectionHeader.foreground': theme.grayLighter,
  'panelSectionHeader.border': theme.transparent
};
