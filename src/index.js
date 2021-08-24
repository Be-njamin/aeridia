const fs = require('fs');
const colors = require('./colors');
const tokenColors = require('./tokenColors');

const theme = {
  name: 'Aeridia',
  colors: {
    ...colors.actionColors,
    ...colors.activityBar,
    ...colors.badge,
    ...colors.bannerColors,
    ...colors.baseColors,
    ...colors.breadcrumbs,
    ...colors.buttonControl,
    ...colors.chartColors,
    ...colors.debugIcons,
    ...colors.debugColors,
    ...colors.diffEditorColors,
    ...colors.dropdownControl,
    ...colors.editorColors,
    ...colors.editorGroupsAndTabs,
    ...colors.editorWidgetColors,
    ...colors.extensions,
    ...colors.gitColors,
    ...colors.inputControl,
    ...colors.integratedTerminalColors,
    ...colors.keybindingLabelColors,
    ...colors.listsAndTrees,
    ...colors.menuBarColors,
    ...colors.mergeConflicts,
    ...colors.minimap,
    ...colors.notebook,
    ...colors.notificationColors,
    ...colors.panelColors,
    ...colors.peakViewColors,
    ...colors.portsColors,
    ...colors.progressBar,
    ...colors.quickPicker,
    ...colors.scrollBarControl,
    ...colors.settingsEditor,
    ...colors.sideBar,
    ...colors.snippets,
    ...colors.sourceControl,
    ...colors.statusBarColors,
    ...colors.symbolIcons,
    ...colors.testingColors,
    ...colors.testingView,
    ...colors.textColors,
    ...colors.titleBarColors,
    ...colors.welcomePage,
    ...colors.window
  },
  tokenColors
};

fs.writeFile(
  'themes/Aeridia-color-theme.json',
  JSON.stringify(theme),
  (error) => {
    const log = error
      ? { method: 'error', message: error }
      : { method: 'log', message: 'Theme created' };

    console[log.method](log.message);
  }
);
