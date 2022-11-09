require("../Models/Item");

const Item = require('mongoose').model('Item');

const DBConn = require('../Config/Database');

module.exports.RenderPage_Home = (req, res, next) => {
    res.render('Page', { PageTitle: 'Home' });
}