const express = require('express');
const cors = require('cors');
require('./config/connect');


const app = express();
app.use(express.json());
app.use(cors());

const userRouter = require('./routes/user');
const animalRouter = require('./routes/animal');
const postRouter = require('./routes/post');
const favorisRouter = require('./routes/favoris');



app.use( '/user' , userRouter );
app.use( '/animal' , animalRouter );
app.use( '/post' , postRouter );
app.use( '/favoris' , favorisRouter );



app.use(  '/getimage'  , express.static('./uploads'));



app.listen( '3000' , ()=>{

    console.log( 'server is  on !' );

} );
