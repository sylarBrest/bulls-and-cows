import { BASE_CONFIG, BASE_ORDER, MIN_LENGTH, maxLengthForBase } from '../config.js';
import type { Base, TInitialOpts } from '../types.js';

export interface SettingsRefs {
  root: HTMLElement;
  baseSelect: HTMLSelectElement;
  lengthSelect: HTMLSelectElement;
  startButton: HTMLButtonElement;
}

export function createSettings(initial: TInitialOpts): SettingsRefs {
  const root = document.createElement('section');
  root.className = 'section settings-section';

  const settingsContainer = document.createElement('div');
  settingsContainer.className = 'container settings-container';

  const settingsTitle = document.createElement('h2');
  settingsTitle.className = 'title section-title';
  settingsTitle.textContent = 'Settings';

  const baseContainer = document.createElement('div');
  baseContainer.className = 'select-group';

  const baseLabel = document.createElement('label');
  baseLabel.className = 'label';
  baseLabel.htmlFor = 'base';
  baseLabel.textContent = 'Base: ';

  const baseSelect = document.createElement('select');
  baseSelect.id = 'base';
  baseSelect.name = 'base';
  baseSelect.className = 'select';
  BASE_ORDER.forEach((base) => {
    const option = document.createElement('option');
    option.value = base;
    option.textContent = BASE_CONFIG[base].label;
    option.selected = base === initial.base;
    baseSelect.append(option);
  });

  baseContainer.append(baseLabel, baseSelect);

  const lengthContainer = document.createElement('div');
  lengthContainer.className = 'select-group';

  const lengthLabel = document.createElement('label');
  lengthLabel.className = 'label';
  lengthLabel.htmlFor = 'length';
  lengthLabel.textContent = 'Length: ';

  const lengthSelect = document.createElement('select');
  lengthSelect.id = 'length';
  lengthSelect.name = 'length';
  lengthSelect.className = 'select';

  lengthContainer.append(lengthLabel, lengthSelect);

  const startButton = document.createElement('button');
  startButton.type = 'button';
  startButton.className = 'button start-button';
  startButton.textContent = 'Start Game';

  settingsContainer.append(settingsTitle, baseContainer, lengthContainer, startButton);
  root.append(settingsContainer);

  function rebuildLengthOptions(newLength: number): void {
    const max = maxLengthForBase(baseSelect.value as Base);
    const next = Math.min(Math.max(newLength, MIN_LENGTH), max);

    lengthSelect.replaceChildren();
    for (let n = MIN_LENGTH; n <= max; n += 1) {
      const option = document.createElement('option');
      option.value = String(n);
      option.textContent = String(n);
      option.selected = n === next;
      lengthSelect.append(option);
    }
  }

  rebuildLengthOptions(initial.length);
  baseSelect.addEventListener('change', () => {
    rebuildLengthOptions(Number(lengthSelect.value));
  });

  return { root, baseSelect, lengthSelect, startButton };
}
