const theme = require("../theme");

// Testing Colors
// https://code.visualstudio.com/api/references/theme-color#testing-colors

module.exports = {
  'testing.iconFailed': theme.redDarker,
  'testing.iconErrored': theme.yellowDarker,
  'testing.iconPassed': theme.greenDarker,
  'testing.runAction': theme.blueDarker,
  'testing.iconQueued': theme.magentaDarker,
  'testing.iconUnset': theme.grayDarker,
  'testing.iconSkipped': theme.cyanDarker,
  'testing.peekBorder': theme.transparent,
  'testing.message.error.decorationForeground': theme.red,
  'testing.message.error.lineBackground': theme.redDarker,
  'testing.message.warning.decorationForeground': theme.yellow,
  'testing.message.warning.lineBackground': theme.yellowDarker,
  'testing.message.info.decorationForeground': theme.blue,
  'testing.message.info.lineBackground': theme.blueDarker,
  'testing.message.hint.decorationForeground': theme.magenta,
  'testing.message.hint.lineBackground': theme.magentaDarker
};
