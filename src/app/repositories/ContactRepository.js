const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll(orderBy) {
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${orderBy}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(contact) {
    return new Promise((resolve) => {
      const updatedContact = { ...contact };
      const index = contacts.findIndex((contactObject) => contactObject.id === updatedContact.id);
      contacts.splice(index, 1, updatedContact);
      resolve(updatedContact);
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
