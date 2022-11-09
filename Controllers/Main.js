require("../Models/Incident");

const Item = require('mongoose').model('Incident');

const DBConn = require('../Config/Database');

module.exports.RenderPage_Home = (req, res, next) => {
    res.render('Page', { PageTitle: 'Home' });
}