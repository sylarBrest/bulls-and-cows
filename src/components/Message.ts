export interface MessageRefs {
  root: HTMLDivElement;
}

export function createMessage(): MessageRefs {
  const root = document.createElement('div');
  root.className = 'game-message';
  return { root };
}
