const theme = require('../theme');

// Git Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors

module.exports = {
  'gitDecoration.addedResourceForeground': theme.greenDarker,
  'gitDecoration.modifiedResourceForeground': theme.blueDarker,
  'gitDecoration.deletedResourceForeground': theme.redDarker,
  'gitDecoration.renamedResourceForeground': theme.blueDarker,
  'gitDecoration.stageModifiedResourceForeground': theme.cyan,
  'gitDecoration.stageDeletedResourceForeground': theme.red,
  'gitDecoration.untrackedResourceForeground': theme.yellowDarker,
  'gitDecoration.ignoredResourceForeground': theme.blackLightest,
  'gitDecoration.conflictingResourceForeground': theme.yellow,
  'gitDecoration.submoduleResourceForeground': theme.magenta
};
