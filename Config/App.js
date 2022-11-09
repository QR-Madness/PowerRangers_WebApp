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
let incidentRouter = require('../Routes/incident')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Configuring Server Application
app.set("views", "Views");
app.set('view engine', 'ejs'); // express -e
app.use(express.static('Public'));
app.use(express.static('node_modules'));


app.use('/', routes);
app.use('/incidentList',incidentRouter);



// Configuring MongoDB and our Connection to it
let Mongo_DBConnection = require('../Config/Database');
const { expr } = require('jquery');

//point mongoose to the db uri

mongoose.connect(Mongo_DBConnection.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error'));
mongoDB.once('open',()=>{
    console.log('connected to mongoDB...');
});



module.exports = app;