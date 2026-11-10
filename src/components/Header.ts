interface HeaderRefs {
  root: HTMLElement;
  newGameButton: HTMLButtonElement;
  leaderboardButton: HTMLButtonElement;
}

export function createHeader(): HeaderRefs {
  const root = document.createElement('header');
  root.className = 'header';

  const headerContainer = document.createElement('div');
  headerContainer.className = 'container header-container';

  const title = document.createElement('h1');
  title.className = 'title header-title';
  title.textContent = 'Bulls & Cows';

  const actionButtons = document.createElement('nav');
  actionButtons.className = 'nav nav-buttons';

  const newGameButton = document.createElement('button');
  newGameButton.type = 'button';
  newGameButton.className = 'button new-game-button';
  newGameButton.textContent = 'New Game';

  const leaderboardButton = document.createElement('button');
  leaderboardButton.type = 'button';
  leaderboardButton.className = 'button leaderboard-button';
  leaderboardButton.textContent = 'Leaderboard';

  actionButtons.append(newGameButton, leaderboardButton);
  headerContainer.append(title, actionButtons);
  root.append(headerContainer);

  return { root, newGameButton, leaderboardButton };
}
