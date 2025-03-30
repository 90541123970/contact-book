<template>
    <div class="container">
      
  
      <!-- Search Bar -->
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search contacts..." 
        class="search-bar"
      />
  
      <!-- Add Contact Button -->
      <router-link to="/add" class="btn add-button">Add Contact</router-link>
  
      <!-- Contact Table -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Street</th>
              <th>City</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="contact in filteredContacts" 
              :key="contact.id"
            >
              <td @click="viewContact(contact.id)">{{ contact.lastName }}, {{ contact.firstName }}</td>
              <td>{{ contact.phone }}</td>
              <td>{{ contact.street }}</td>
              <td>{{ contact.city }}</td>
              <td>{{ contact.email }}</td>
              <td class="actions">
                <!-- Edit Button -->
                <router-link :to="'/edit/' + contact.id" class="btn edit-button">Edit</router-link>
                
                <!-- Delete Button -->
                <button class="btn delete-button" @click="deleteContact(contact.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        contacts: JSON.parse(localStorage.getItem('contacts')) || []
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter(contact => 
          contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.phone.includes(this.searchQuery)
        ).sort((a, b) => a.lastName.localeCompare(b.lastName));
      }
    },
    methods: {
      viewContact(id) {
        this.$router.push(`/contact/${id}`);
      },
      deleteContact(id) {
        if (confirm("Are you sure you want to delete this contact?")) {
          this.contacts = this.contacts.filter(contact => contact.id !== id);
          localStorage.setItem('contacts', JSON.stringify(this.contacts));
        }
      }
    }
  };
  </script>
  