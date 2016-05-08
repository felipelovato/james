import Keyboard from './service/keyboard.js';
import store from './store/index.js';

import { toggleDevTools } from './actions/app.js';
import { showAddUrlMapping } from './actions/url-mappings.js';

export default () => {
  const keyboard = new Keyboard();
  const toggleTools = () => store.dispatch(toggleDevTools());
  const openUrlMappings = () => { store.dispatch(showAddUrlMapping());};

  keyboard.register('F12', toggleTools);
  keyboard.register('Ctrl+Shift+I', toggleTools);
  keyboard.register('CommandOrControl+Alt+I', toggleTools);
  keyboard.register('CommandOrControl+Alt+U', toggleTools);
  keyboard.register('CommandOrControl+U', openUrlMappings);
};
