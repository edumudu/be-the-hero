const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.post('/sessions', SessionController.create);

router.get('/ongs', OngController.index);
router.post('/ongs', OngController.create);

router.get('/profile', ProfileController.index);

router.get('/incidents', IncidentsController.index);
router.post('/incidents', IncidentsController.create);
router.delete('/incidents/:id', IncidentsController.delete);


module.exports = router;
