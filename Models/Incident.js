<<<<<<< HEAD
const mongoose = require('mongoose');
=======
let mongoose = require('mongoose');
/*const Schema = mongoose.Schema;

const incidentModel = new Schema({
    Name: String,
    Price_Unit: Number,
    Price_ExpectedSale: Number,
}, {
    collection: "PowerRangers_WebApp"
});
mongoose.model('Item', ItemSchema);
*/
>>>>>>> dev

let incidentModel = mongoose.Schema({
    number: String,
    state: String,
<<<<<<< HEAD
    description: String,
=======
    title: String,
>>>>>>> dev
    priority: String,
    category: String,
    assignedTo: String,
    assignedBy: String
},
{
    collection:"incident_management"
});
module.exports = mongoose.model('Incident', incidentModel);