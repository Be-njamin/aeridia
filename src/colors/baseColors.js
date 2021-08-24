const theme = require('../theme');

// Base Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors

module.exports = {
  focusBorder: theme.transparent,
  foreground: theme.whiteDarker,
  'widget.shadow': theme.transparent,
  'selection.background': `${theme.whiteLightest}${theme.hexAlpha_020}`,
  descriptionForeground: theme.whiteDarker,
  errorForeground: theme.redLighter,
  'icon.foreground': theme.grayDarker,
  'sash.hoverBorder': theme.transparent
};
