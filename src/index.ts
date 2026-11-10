import { createUI } from './ui.js';

const app = document.createElement('div');
app.id = 'app';

createUI(app);

document.body.prepend(app);
