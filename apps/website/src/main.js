import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'

if (document.getElementById('website')) {
  const app = createApp(App);
  
  app.use(router);
  app.mount('#website');
}
