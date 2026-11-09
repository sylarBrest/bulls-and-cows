import { createHeader } from './components/index.js';

export function createUI(appMount: HTMLElement): void {
  const header = createHeader();
  appMount.append(header.root);
}
