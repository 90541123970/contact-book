<template>
    <div v-if="contact">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <p>Phone: {{ contact.phone }}</p>
      <p>Address: {{ contact.address }}</p>
  
      <router-link :to="`/edit/${contact.id}`">Edit</router-link>
      <button @click="deleteContact">Delete</button>
    </div>
    <p v-else>Contact not found.</p>
  </template>
  
  <script>
  import { getContacts, deleteContact as removeContact } from '../utils/localStorage';
  
  export default {
    data() {
      return {
        contact: null,
      };
    },
    created() {
      const contacts = getContacts();
      this.contact = contacts.find(c => c.id === this.$route.params.id);
    },
    methods: {
      deleteContact() {
        removeContact(this.contact.id);
        this.$router.push('/');
      },
    },
  };
  </script>
  