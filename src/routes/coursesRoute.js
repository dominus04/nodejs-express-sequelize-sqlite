const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const router = Router();

const courseController = new CourseController();

router.get('/courses', (req, res) => courseController.getAll(req, res));
router.get('/courses/:id', (req, res) => courseController.getOneById(req, res));
router.post('/courses', (req, res) => courseController.createNew(req, res));
router.put('/courses/:id', (req, res) => courseController.update(req, res));
router.delete('/courses/:id', (req, res) => courseController.delete(req, res));

module.exports = router;
