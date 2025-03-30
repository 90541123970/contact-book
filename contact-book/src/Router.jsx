import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './Views/Contactlist.vue';
import ContactDetails from './Views/ContactDetails.vue';
import ContactForm from './Views/ContactForm.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/add', component: ContactForm },
  { path: '/edit/:id', component: ContactForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
