const theme = require("../theme");

// Snippets
// https://code.visualstudio.com/api/references/theme-color#snippets

// TODO: Implement Snippets Colors

module.exports = {
  'editor.snippetTabstopHighlightBackground': `${theme.gray}${theme.hexAlpha_020}`,
  'editor.snippetTabstopHighlightBorder': theme.transparent,
  'editor.snippetFinalTabstopHighlightBackground': `${theme.gray}${theme.hexAlpha_040}`,
  'editor.snippetFinalTabstopHighlightBorder': theme.transparent
};
