import type { SettingsRefs } from './Settings.js';
import { createSettings } from './Settings.js';
import type { TInitialOpts } from '../types.js';

interface MainRefs {
  root: HTMLElement;
  settings: SettingsRefs;
}

export function createMain(initial: TInitialOpts): MainRefs {
  const root = document.createElement('main');
  root.className = 'main';

  const settings = createSettings(initial);
  root.append(settings.root);

  return { root, settings };
}
