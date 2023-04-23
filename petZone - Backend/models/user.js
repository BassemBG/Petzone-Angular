const mongoose = require('mongoose');

const User = mongoose.model('User', {

    image:
    {
        type: String,
    },
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    numTel:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    dateBirth:
    {
        type: Date,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    }

});



module.exports = User;