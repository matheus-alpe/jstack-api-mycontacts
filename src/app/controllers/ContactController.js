const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      response.status(404).json({ error: 'Contact not found' });
      return;
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone = '', category_id,
    } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required.' });
      return;
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      response.status(400).json({ error: 'This e-mail already been taken.' });
      return;
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  updated() {

  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      response.status(404).json({ error: 'Contact not found' });
      return;
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

// design pattern: Singleton
module.exports = new ContactController();
