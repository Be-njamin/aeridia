const theme = require('../theme')

// Side Bar
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar

module.exports = {
  'sideBar.background': theme.blackDarker,
  'sideBar.foreground': theme.grayDarker,
  'sideBar.border': theme.transparent,
  'sideBar.dropBackground': `${theme.blackDarkest}${theme.hexAlpha_060}`,
  'sideBarTitle.foreground': theme.grayLightest,
  'sideBarSectionHeader.background': theme.black,
  'sideBarSectionHeader.foreground': theme.grayDarkest,
  'sideBarSectionHeader.border': theme.transparent
}
