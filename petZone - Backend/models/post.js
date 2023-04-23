const mongoose = require('mongoose');

const Post = mongoose.model('Post', {

    animal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    descendanceRace:{
        type: String,
        required: true
    },
    negociable:{
        type: Boolean,
        required: true
    },
    contenue:{
        type: String,
        required: true
    },
    typeEchange:{
        type: String,
        required: true
    }


} );

module.exports = Post;