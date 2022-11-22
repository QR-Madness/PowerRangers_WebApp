let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let incidentController = require("../Controllers/Incident");

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to our incident model
//let incident = require('../Models/Incident');


//get route for the incident page - read operation

router.get('/', incidentController.displayIncidentList);

//get route for displaying add page - Create operation
router.get('/add', requireAuth, incidentController.displayAddPage);

//get route for processing add page - Create operation
router.post('/add', requireAuth, incidentController.processAddPage);

// GET Route for displaying Edit page - UPDATE Operation 

router.get('/edit/:id', requireAuth, incidentController.displayEditPage);

// POST Route for processing Edit page - UPDATE Operation 

router.post('/edit/:id', requireAuth, incidentController.processEditPage);

// GET Route to perform Deletion - DELETE Operation 

router.get('/delete/:id', requireAuth, incidentController.performDelete);


module.exports = router;