<template>
    <div>
      <h2>{{ isEdit ? 'Edit Contact' : 'Add Contact' }}</h2>
      <form @submit.prevent="saveContact">
        <input v-model="contact.firstName" placeholder="First Name" required />
        <input v-model="contact.lastName" placeholder="Last Name" required />
        <input v-model="contact.email" type="email" placeholder="Email" required />
        <input v-model="contact.phone" placeholder="Phone" />
        <input v-model="contact.address" placeholder="Address" />
        <button type="submit">{{ isEdit ? 'Update' : 'Save' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getContacts, addContact, updateContact } from '../utils/localStorage';
  
  export default {
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        },
        isEdit: false,
      };
    },
    created() {
      if (this.$route.params.id) {
        const contacts = getContacts();
        const existingContact = contacts.find(c => c.id === this.$route.params.id);
        if (existingContact) {
          this.contact = { ...existingContact };
          this.isEdit = true;
        }
      }
    },
    methods: {
      saveContact() {
        if (this.isEdit) {
          updateContact(this.contact);
        } else {
          addContact(this.contact);
        }
        this.$router.push(`/contact/${this.contact.id}`);
      },
    },
  };
  </script>
  