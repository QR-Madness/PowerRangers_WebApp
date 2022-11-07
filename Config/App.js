// Importing NPM Dependencies for Server
let express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose');

const app = express();

// Setting up development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

// Importing Local Server Configurations
let routes = require('../Routes/Main');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Configuring Server Application
app.set("views", "Views");
app.set('view engine', 'ejs'); // express -e
app.use(express.static('Public'));
app.use('/', routes);

// Configuring MongoDB and our Connection to it
const Mongo_DBConnection = require('../Config/Database');

module.exports = app;