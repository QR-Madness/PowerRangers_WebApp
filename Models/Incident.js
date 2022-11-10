const mongoose = require('mongoose');

let incidentModel = mongoose.Schema({
    number: String,
    state: String,
    description: String,
    priority: String,
    category: String,
    assignedTo: String,
    assignedBy: String
}, {
    collection: "incident_management"
});
module.exports = mongoose.model('Incident', incidentModel);