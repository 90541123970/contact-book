<template>
    <div>
      <h2>{{ isEdit ? 'Edit' : 'Add' }} Contact</h2>
      <form @submit.prevent="submitForm">
        <input v-model="form.firstName" placeholder="First Name" required />
        <input v-model="form.lastName" placeholder="Last Name" required />
        <input v-model="form.email" placeholder="Email" type="email" required />
        <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { getContacts, saveContacts } from '../Utils/LocalStorage';
  
  export default {
    props: {
      id: {
        type: String,
        default: null
      }
    },
    setup(props) {
      const router = useRouter();
      const route = useRoute();
      const isEdit = ref(!!props.id);
      const form = ref({ firstName: '', lastName: '', email: '' });
  
      onMounted(() => {
        if (isEdit.value) {
          const contact = getContacts().find(c => c.id === parseInt(route.params.id));
          if (contact) {
            form.value = { ...contact };
          }
        }
      });
  
      const submitForm = () => {
        const contacts = getContacts();
        if (isEdit.value) {
          const index = contacts.findIndex(c => c.id === parseInt(route.params.id));
          contacts[index] = { ...form.value };
        } else {
          form.value.id = Date.now();
          contacts.push(form.value);
        }
        saveContacts(contacts);
        router.push(`/contact/${form.value.id}`);
      };
  
      return { form, isEdit, submitForm };
    }
  };
  </script>
  