const mongoose = require('mongoose');

const Favoris = mongoose.model('Favoris', {

    animal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
    },
    pub_favoris:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
    
} );

module.exports = Favoris;