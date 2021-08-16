const theme = require("../theme");

// Minimap
// https://code.visualstudio.com/api/references/theme-color#minimap

module.exports = {
  'minimap.findMatchHighlight': theme.whiteDarkest,
  'minimap.selectionHighlight': theme.grayLightest,
  'minimap.errorHighlight': theme.redDarker,
  'minimap.warningHighlight': theme.yellowDarker,
  'minimap.background': `${theme.blackDarkest}${theme.hexAlpha_060}`,
  'minimapSlider.background': `${theme.blackDarkest}${theme.hexAlpha_020}`,
  'minimapSlider.hoverBackground': `${theme.blackDarkest}${theme.hexAlpha_030}`,
  'minimapSlider.activeBackground': `${theme.blackDarkest}${theme.hexAlpha_040}`,
  'minimapGutter.addedBackground': theme.greenDarker,
  'minimapGutter.modifiedBackground': theme.blueDarker,
  'minimapGutter.deletedBackground': theme.redDarker
};
