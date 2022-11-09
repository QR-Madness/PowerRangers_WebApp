/*
const mongoose = require('mongoose');

// Configuring MongoDB and our Connection to it
const MongoDB_Config = {
    db: 'mongodb://localhost/incident_management',
    sessionSecret: 'developmentSessionSecret'
};
const Mongo_DBConnection = mongoose.connect(MongoDB_Config.db);

module.exports = Mongo_DBConnection;
*/
module.exports = {
    "URI":"mongodb://localhost/incident_management"
}