let express = require('express');
let routes = express.Router();
let ControllerMain = require("../Controllers/Main");

routes.get('/', ControllerMain.RenderPage_Home);

//get route for displaying login page
routes.get('/login', ControllerMain.displayLoginPage);

//get route for processing login page
routes.post('/login', ControllerMain.processLoginPage);

//get route for displaying register page
routes.get('/register', ControllerMain.displayRegisterPage);

//get route for processing register page
routes.post('/register', ControllerMain.processRegisterPage);

// GET Route to perform logout  

routes.get('/logout', ControllerMain.performLogout);

// get route for displaying About page
routes.get('/about', ControllerMain.displayAboutPage);

module.exports = routes;