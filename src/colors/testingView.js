const theme = require("../theme");

// Testing View
// https://code.visualstudio.com/api/references/theme-color#testing-view-colors

module.exports = {
  'testing.iconFailed': theme.redDarker,
  'testing.iconErrored': theme.yellowDarker,
  'testing.iconPassed': theme.greenDarker,
  'testing.runAction': theme.blueDarker,
  'testing.iconQueued': theme.blueDarker,
  'testing.iconUnset': theme.magentaDarker,
  'testing.iconSkipped': theme.grayDarker,
  'testing.peekBorder': theme.transparent,
  'testing.message.error.decorationForeground': theme.redDarker,
  'testing.message.error.lineBackground': `${theme.redDarker}${theme.hexAlpha_040}`,
  'testing.message.warning.decorationForeground': theme.yellowDarker,
  'testing.message.warning.lineBackground': `${theme.yellowDarker}${theme.hexAlpha_040}`,
  'testing.message.info.decorationForeground': theme.blueDarker,
  'testing.message.info.lineBackground': `${theme.blueDarker}${theme.hexAlpha_040}`,
  'testing.message.hint.decorationForeground': theme.cyanDarker,
  'testing.message.hint.lineBackground': `${theme.cyanDarker}${theme.hexAlpha_040}`,

};
