<template>
    <div v-if="contact">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
  
      <router-link :to="`/edit/${contact.id}`">Edit</router-link>
      <button @click="deleteContact">Delete</button>
  
      <router-link to="/">Back to Contact List</router-link>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { getContacts, saveContacts } from '../Utils/LocalStorage';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = ref(null);
  
      onMounted(() => {
        const contacts = getContacts();
        contact.value = contacts.find(c => c.id === parseInt(route.params.id));
      });
  
      const deleteContact = () => {
        const contacts = getContacts().filter(c => c.id !== contact.value.id);
        saveContacts(contacts);
        router.push('/');
      };
  
      return { contact, deleteContact };
    }
  };
  </script>
  