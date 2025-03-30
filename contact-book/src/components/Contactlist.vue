<template>
    <div>
     
      <input v-model="search" placeholder="Search by name" />
  
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
  
      <router-link to="/add">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { getContacts } from '../Utils/LocalStorage';
  
  export default {
    setup() {
      const contacts = ref(getContacts());
      const search = ref('');
  
      const filteredContacts = computed(() => {
        return contacts.value
          .filter(contact =>
            `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.value.toLowerCase())
          )
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      return {
        contacts,
        search,
        filteredContacts
      };
    }
  };
  </script>
  