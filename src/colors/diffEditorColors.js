const theme = require('../theme');

// Diff Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors

module.exports = {
  'diffEditor.insertedTextBackground': `${theme.greenDarker}${theme.hexAlpha_050}`,
  'diffEditor.insertedTextBorder': theme.transparent,
  'diffEditor.removedTextBackground': `${theme.redDarker}${theme.hexAlpha_050}`,
  'diffEditor.removedTextBorder': theme.transparent,
  'diffEditor.border': theme.transparent,
  'diffEditor.diagonalFill': theme.blackDarkest
};
