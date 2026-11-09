export interface GuessFormRefs {
  root: HTMLFormElement;
  input: HTMLInputElement;
  submitButton: HTMLButtonElement;
}

export function createGuessForm(): GuessFormRefs {
  const root = document.createElement('form');
  root.className = 'form game-form';

  const label = document.createElement('label');
  label.className = 'label game-label';
  label.htmlFor = 'game-input';
  label.textContent = 'Input your guess';

  const input = document.createElement('input');
  input.className = 'input game-input';
  input.id = 'game-input';
  input.type = 'text';
  input.maxLength = 6;
  input.size = 6;
  input.autocomplete = 'off';

  const submitButton = document.createElement('button');
  submitButton.className = 'button check-button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Check';

  root.append(label, input, submitButton);

  root.addEventListener('submit', (event) => event.preventDefault());

  return { root, input, submitButton };
}
