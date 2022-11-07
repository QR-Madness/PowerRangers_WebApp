const mongoose = require('mongoose');

// Configuring MongoDB and our Connection to it
const MongoDB_Config = {
    db: 'mongodb://localhost:27017',
    sessionSecret: 'developmentSessionSecret'
};
const Mongo_DBConnection = mongoose.connect(MongoDB_Config.db);

module.exports = Mongo_DBConnection;