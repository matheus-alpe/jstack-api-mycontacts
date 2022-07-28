const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.post('/contacts', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.updated);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.updated);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
