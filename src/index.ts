import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the solarizedlighttheme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'solarizedlighttheme:plugin',
  description: 'A JupyterLab extension for solarized light theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension solarizedlighttheme is activated!');
    const style = 'solarizedlighttheme/index.css';

    manager.register({
      name: 'solarizedlighttheme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
