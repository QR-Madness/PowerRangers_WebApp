let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our incident model
let incident = require('../Models/Incident');
let incidentController = require("../Controllers/Incident");

//get route for the incident page - read operation

router.get('/', incidentController.displayIncidentList);

//get route for displaying add page - Create operation
router.get('/add', incidentController.displayAddPage);

//get route for processing add page - Create operation
router.post('/add', incidentController.processAddPage);

// GET Route for displaying Edit page - UPDATE Operation 

router.get('/edit/:id', incidentController.displayEditPage);

// POST Route for processing Edit page - UPDATE Operation 

router.post('/edit/:id', incidentController.processEditPage);

// GET Route to perform Deletion - DELETE Operation 

router.get('/delete/:id', incidentController.performDelete);


module.exports = router;