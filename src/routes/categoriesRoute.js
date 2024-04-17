const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController.js');

const router = Router();

const categoryController = new CategoryController();

router.get('/categories', (req, res) => categoryController.getAll(req, res));
router.get('/categories/:id', (req, res) => categoryController.getOneById(req, res));
router.post('/categories', (req, res) => categoryController.createNew(req, res));
router.put('/categories/:id', (req, res) => categoryController.update(req, res));
router.delete('/categories/:id', (req, res) => categoryController.delete(req, res));

module.exports = router;
