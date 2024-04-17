const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');
const EnrollmentController = require('../controllers/EnrollmentController.js');

const router = Router();

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

router.get('/persons', (req, res) => personController.getAll(req, res));
router.get('/persons/all', (req, res) => personController.getAllPersons(req, res));
router.get('/persons/:id', (req, res) => personController.getOneById(req, res));
router.post('/persons', (req, res) => personController.createNew(req, res));
router.put('/persons/:id', (req, res) => personController.update(req, res));
router.delete('/persons/:id', (req, res) => personController.delete(req, res));
router.get('/persons/:studentId/enrollments', (req, res) => personController.getEnrollsById(req, res));
router.post('/persons/:studentId/enrollments', (req, res) => enrollmentController.createNew(req, res));

module.exports = router;
