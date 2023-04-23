const mongoose = require('mongoose');

mongoose.connect( 'mongodb://127.0.0.1:27017/finalProject' )
    .then(
        ()=>{
            console.log( 'connected to database !' );
        }
    )

    .catch(
        ()=>{
            console.log( 'error in connection to database !' );
        }
    )


module.exports = mongoose;