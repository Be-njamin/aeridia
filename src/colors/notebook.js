const theme = require("../theme");

// Notebook
// https://code.visualstudio.com/api/references/theme-color#notebook-colors

module.exports = {
  'notebook.cellBorderColor': theme.transparent,
  'notebook.cellHoverBackground': theme.blackLighter,
  'notebook.cellInsertionIndicator': theme.blackLightest,
  'notebook.cellStatusBarItemHoverBackground': theme.blackLigher,
  'notebook.cellToolbarSeparator': theme.transparent,
  'notebook.cellEditorBackground': theme.blackDarkest,
  'notebook.focusedCellBackground': theme.blackDarker,
  'notebook.focusedCellBorder': theme.transparent,
  'notebook.focusedEditorBorder': theme.transparent,
  'notebook.inactiveFocusedCellBorder': theme.black,
  'notebook.inactiveSelectedCellBorder': theme.transparent,
  'notebook.outputContainerBackgroundColor': theme.blackDarkest,
  'notebook.selectedCellBackground': theme.blackDarkest,
  'notebook.selectedCellBorder': theme.transparent,
  'notebook.symbolHighlightBackground': theme.grayDarkest,
  'notebookScrollbarSlider.activeBackground': `${theme.blackDarkest}${theme.hexAlpha_080}`,
  'notebookScrollbarSlider.background': `${theme.blackDarkest}${theme.hexAlpha_040}`,
  'notebookScrollbarSlider.hoverBackground': `${theme.blackDarkest}${theme.hexAlpha_060}`,
  'notebookStatusErrorIcon.foreground': theme.redDarker,
  'notebookStatusRunningIcon.foreground': theme.blueDarker,
  'notebookStatusSuccessIcon.foreground': theme.greenDarker
};
