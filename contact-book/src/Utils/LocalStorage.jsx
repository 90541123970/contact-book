export function getContacts() {
  return JSON.parse(localStorage.getItem('contacts')) || [];
}

export function saveContacts(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function addContact(contact) {
  const contacts = getContacts();
  contact.id = Date.now().toString();
  contacts.push(contact);
  saveContacts(contacts);
}

export function updateContact(updatedContact) {
  let contacts = getContacts();
  contacts = contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact);
  saveContacts(contacts);
}

export function deleteContact(id) {
  let contacts = getContacts();
  contacts = contacts.filter(contact => contact.id !== id);
  saveContacts(contacts);
}
