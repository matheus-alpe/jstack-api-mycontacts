const CategoryRepository = require('../repositories/CategoryRepository');

const { getValidOrder } = require('../../utils');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const order = getValidOrder(orderBy);

    const categories = await CategoryRepository.findAll(order);
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required.' });
      return;
    }

    const category = await CategoryRepository.create({ name });
    response.json(category);
  }

  async updated(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required.' });
      return;
    }

    const categoryExists = await CategoryRepository.findById(id);
    if (!categoryExists) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    const category = await CategoryRepository.update(id, { name });
    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
