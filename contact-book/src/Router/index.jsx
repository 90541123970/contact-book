import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './Views/ContactList.vue';
import ContactDetails from './Views/ContactDetails.vue';
import ContactForm from './Views/ContactForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: ContactList,
    },
    {
      path: '/contact/:id',
      name: 'contact-details',
      component: ContactDetails,
      props: true,
    },
    {
      path: '/new',
      name: 'new-contact',
      component: ContactForm,
    },
    {
      path: '/edit/:id',
      name: 'edit-contact',
      component: ContactForm,
      props: true,
    },
  ],
});

export default router;