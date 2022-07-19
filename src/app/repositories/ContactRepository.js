const { v4 } = require('uuid');

const contacts = [
  {
    id: '67514256-3c7a-4464-b309-1f6cc175380e',
    name: 'Matheus',
    email: 'matttalves@gmail.com',
    phone: '48991836171',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Teste',
    email: 'teste@gmail.com',
    phone: '48991111111',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contactObject) => contactObject.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      const index = contacts.findIndex((contactObject) => contactObject.id === id);
      contacts.splice(index, 1);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
