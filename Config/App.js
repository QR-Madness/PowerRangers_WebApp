// Importing NPM Dependencies for Server
let express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose');

const app = express();
let path = require('path');
let cors = require('cors');
//modules for authentication

let session = require('express-session');
let passport = require('passport');

let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// database setup
let Database = require('./Database');

// Setting up development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

// Importing Local Server Configurations
let routes = require('../Routes/Main');
let incidentRouter = require('../Routes/Incident')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

//app.set("views", "Views");
app.set("views", path.join(__dirname, '../Views'));
app.set('view engine', 'ejs'); // express -e
app.use(express.static('Public'));
app.use(express.static('node_modules'));

//setup express session
app.use(session({
    secret:"powerRanger",
    saveUninitialized: false,
    resave: false
}));

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user confiuguration

//create a user model instance
let userModel = require('../Models/user');
let User = userModel.user;

//implement a user authentication strategy
passport.use(User.createStrategy());

//serialize and deserialze the user info

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = Database.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        return done(null, user);
      })
      .catch(err => {
        return done(err, false);
      });
  });
  
  passport.use(strategy);

app.use('/', routes);
app.use('/incident-list', incidentRouter);

// Configuring MongoDB and our Connection to it
let Mongo_DBConnection = require('../Config/Database');
const { expr } = require('jquery');

//point mongoose to the db uri

mongoose.connect(Mongo_DBConnection.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error'));
mongoDB.once('open', () => {
    console.log('connected to mongoDB...');
});


module.exports = app;