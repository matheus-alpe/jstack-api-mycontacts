const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const hasValidOrderBy = /^(asc|desc)$/i.test(orderBy);
    const order = hasValidOrderBy ? orderBy : 'ASC';

    const contacts = await ContactsRepository.findAll(order);
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
      response.status(400).json({ error: 'This e-mail already in use.' });
      return;
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async updated(request, response) {
    const { id } = request.params;
    const {
      name, email, phone = '', category_id,
    } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required.' });
      return;
    }

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      response.status(404).json({ error: 'Contact not found' });
      return;
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && (contactByEmail.id !== id)) {
      response.status(400).json({ error: 'This e-mail already in use.' });
      return;
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });
    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

// design pattern: Singleton
module.exports = new ContactController();
