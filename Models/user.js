// require modules for the user model

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let user = mongoose.Schema(
    {
        username:
        {
            type:String,
            default:'',
            trim:true,
            required:'username is required'
        },
        /*
        password:
        {
            type:String,
            default:'',
            trim:true,
            required:'password is required'
        },
        */
        email:
        {
            type:String,
            default:'',
            trim:true,
            required:'email is required'
        },
        displayName:
        {
            type:String,
            default:'',
            trim:true,
            required:'Display name is required'
        },
        created:
        {
            type:Date,
            default:Date.now,
        },
        updated:
        {
            type:Date,
            default:Date.now,
        }

    },
    {
        collection:"users"
    }
);

//configure options for our user model

let options = ({missingPasswordError: 'Wrong/Missing Password'});

user.plugin(passportLocalMongoose, options);

module.exports.user = mongoose.model('user',user);