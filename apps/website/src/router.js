import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import BioPage from './components/pages/BioPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import Portfolio from './components/pages/PortfolioPage.vue'
import SkillsPage from './components/pages/SkillsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/bio', component: BioPage },
    { path: '/contact', component: ContactPage },
    { path: '/portfolio', component: Portfolio },
    { path: '/skills', component: SkillsPage },
    { path: '/', component: HomePage }
  ]
});

export default router;