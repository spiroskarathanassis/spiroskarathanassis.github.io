import { createApp } from 'vue'
import App from './App.vue'

if (document.getElementById('website')) {
  createApp(App).mount('#website')
}
