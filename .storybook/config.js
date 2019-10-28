import { configure } from '@storybook/vue';
import '../assets/scss/main.scss';

// import all files that end up with .stories.ts
const req = require.context('../stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
