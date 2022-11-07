let express = require('express');
let routes = express.Router();
let ControllerMain = require("../Controllers/Main");

routes.get('/', ControllerMain.RenderPage_Home);

module.exports = routes;