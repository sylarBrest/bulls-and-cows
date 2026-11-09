interface FooterRefs {
  root: HTMLElement;
  timerValue: HTMLSpanElement;
  attemptsValue: HTMLSpanElement;
}

export function createFooter(): FooterRefs {
  const root = document.createElement('footer');
  root.className = 'footer';

  const footerContainer = document.createElement('div');
  footerContainer.className = 'container footer-container';

  const timer = document.createElement('div');
  timer.className = 'footer-timer-container stats-container';

  const timerLabel = document.createElement('span');
  timerLabel.className = 'stats-label';
  timerLabel.textContent = 'Timer: ';

  const timerValue = document.createElement('span');
  timerValue.className = 'stats-value';
  timerValue.textContent = '00:00';

  timer.append(timerLabel, timerValue);

  const attempts = document.createElement('div');
  attempts.className = 'footer-attempts-container stats-container';

  const attemptsLabel = document.createElement('span');
  attemptsLabel.className = 'stats-label';
  attemptsLabel.textContent = 'Attempts: ';

  const attemptsValue = document.createElement('span');
  attemptsValue.className = 'stats-value';
  attemptsValue.textContent = '0';

  attempts.append(attemptsLabel, attemptsValue);

  footerContainer.append(timer, attempts);
  root.append(footerContainer);

  return { root, timerValue, attemptsValue };
}
