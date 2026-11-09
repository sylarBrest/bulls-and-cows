import { createHeader, createFooter } from './components/index.js';

export function createUI(appMount: HTMLElement): void {
  const header = createHeader();
  const footer = createFooter();
  appMount.append(header.root, footer.root);
}
