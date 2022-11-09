let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let Incident = require("../Models/Incident");

const Item = require('mongoose').model('Incident');

const DBConn = require('../Config/Database');

module.exports.displayIncidentList = (req, res, next) => {
  Incident.find((err, incidentList) => {
    if (err) {
      return console.error(err);
    } else {
     
      res.render("Incidents/incident", {
        PageTitle: "Incident Lists",
        IncidentList: incidentList
      });
    }
  });
};



module.exports.displayAddPage = (req, res, next) => {
    res.render("Incidents/add", { PageTitle: 'Add Incident' });
};

module.exports.processAddPage = (req, res, next) => {
  let newIncident = Incident({
    number: Math.floor(100000 + Math.random() * 900000),
    state: req.body.state,
    description: req.body.description,
    priority: req.body.priority,
    category: req.body.category,
    assignedTo: req.body.assignedTo,
    assignedBy: req.body.assignedBy
  });

  Incident.create(newIncident, (err, Incident) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      
      res.redirect("/incident-list");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Incident.findById(id, (err, incidentToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show the edit view
      res.render("Incidents/edit", {
        PageTitle: "Edit Contact",
        incident: incidentToEdit     
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updateIncident = Incident({
    _id: id,
    number: req.body.number,
    state: req.body.state,
    description: req.body.description,
    priority: req.body.priority,
    category: req.body.category,
    assignedTo: req.body.assignedTo,
    assignedBy: req.body.assignedBy
  });

  Incident.updateOne({ _id: id }, updateIncident, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the incident-list
      res.redirect("/incident-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Incident.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the incident-list
      res.redirect("/incident-list");
    }
  });
};
