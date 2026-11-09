import type { SettingsRefs } from './Settings.js';
import { createSettings } from './Settings.js';
import type { GuessFormRefs } from './GuessForm.js';
import { createGuessForm } from './GuessForm.js';
import type { MessageRefs } from './Message.js';
import { createMessage } from './Message.js';
import type { HistoryRefs } from './History.js';
import { createHistory } from './History.js';
import type { TInitialOpts } from '../types.js';

interface MainRefs {
  root: HTMLElement;
  settings: SettingsRefs;
  guessForm: GuessFormRefs;
  message: MessageRefs;
  history: HistoryRefs;
}

export function createMain(initial: TInitialOpts): MainRefs {
  const root = document.createElement('main');
  root.className = 'main';

  const settings = createSettings(initial);
  const guessForm = createGuessForm();
  const message = createMessage();
  const history = createHistory();

  const gameSection = document.createElement('section');
  gameSection.className = 'section game-section';

  const gameContainer = document.createElement('div');
  gameContainer.className = 'container game-container';

  const gameTitle = document.createElement('h2');
  gameTitle.className = 'title section-title';
  gameTitle.textContent = 'Game Field';

  gameContainer.append(gameTitle, guessForm.root, message.root);
  gameSection.append(gameContainer);

  const historySection = document.createElement('section');
  historySection.className = 'section history-section';

  const historyContainer = document.createElement('div');
  historyContainer.className = 'container history-container';

  const historyTitle = document.createElement('h2');
  historyTitle.className = 'title section-title';
  historyTitle.textContent = 'History';
  historyContainer.append(historyTitle, history.root);
  historySection.append(historyContainer);
  root.append(settings.root, gameSection, historySection);

  return { root, settings, guessForm, message, history };
}
