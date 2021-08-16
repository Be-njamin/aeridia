const theme = require("../theme");

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = {
  'merge.currentHeaderBackground': theme.cyan,
  'merge.currentContentBackground': `${theme.cyanDarker}${theme.hexAlpha_050}`,
  'merge.incomingHeaderBackground': theme.magenta,
  'merge.incomingContentBackground': `${theme.magentaDarker}${theme.hexAlpha_050}`,
  'merge.border': theme.blackDarkest,
  'merge.commonContentBackground': theme.greenDarker,
  'merge.commonHeaderBackground': theme.green,
  'editorOverviewRuler.currentContentForeground': theme.cyanDarker,
  'editorOverviewRuler.incomingContentForeground': theme.magentaDarker,
  'editorOverviewRuler.commonContentForeground': theme.greenDarker
};
