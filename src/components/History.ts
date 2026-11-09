export interface HistoryRefs {
  root: HTMLUListElement;
}

export function createHistory(): HistoryRefs {
  const root = document.createElement('ul');
  root.className = 'game-history';

  return { root };
}
