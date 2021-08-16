const theme = require("../theme");

// Scroll Bar Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control

module.exports = {
  'scrollbar.shadow': theme.transparent,
  'scrollbarSlider.activeBackground': `${theme.blackDarkest}${theme.hexAlpha_040}`,
  'scrollbarSlider.background': `${theme.blackDarkest}${theme.hexAlpha_020}`,
  'scrollbarSlider.hoverBackground': `${theme.blackDarkest}${theme.hexAlpha_030}`
};
