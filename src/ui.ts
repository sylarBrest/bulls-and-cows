import { createHeader, createFooter, createMain } from './components/index.js';

export function createUI(appMount: HTMLElement): void {
  const header = createHeader();
  const main = createMain({ base: 'dec', length: 4 });
  const footer = createFooter();
  appMount.append(header.root, main.root, footer.root);
}
