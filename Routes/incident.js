let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our incident model
let Incident = require('../Models/Incident');

//get route for the incident page - read operation

router.get('/', (req, res, next) => {
    Incident.find((err, incidentList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('incident.ejs', { PageTitle: 'Incident List', IncidentList: incidentList })
        }
    });
});

module.exports = router;