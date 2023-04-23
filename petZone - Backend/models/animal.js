const mongoose = require('mongoose');

const Animal = mongoose.model('Animal', {

    name:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type:{
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    sexe:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    vaccine:{
        type: Boolean,
        required: true
    },
    nbrAvisSatisfait:{
        type: Number,
        default: 0
    },
    nbrAvisNeutre:{
        type: Number,
        default: 0
    },
    nbrAvisFache:{
        type: Number,
        default: 0
    }
} );

module.exports = Animal;