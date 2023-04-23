const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');




router.post(  '/inscription'  , (req, res)=>{

    let data = req.body;
    let user = new User(data);
    console.log(data);
    //crypt
    let salt = bcrypt.genSaltSync(10);  //10 howa longueur ta3 l hash
    let cryptedPass = bcrypt.hashSync( data.password , salt );
    user.password = cryptedPass;
    console.log(cryptedPass);

    user.save()
        .then(
            (savedUser)=>{
                res.status(200).send(savedUser);

            }

        )

        .catch(
            (err)=>{
                res.status(401).send(err);

            }

        )


} );


router.post(  '/authentification'  , (req, res)=>{

    let data = req.body;
    User.findOne({ email : data.email })
        .then(

            (user)=>{
                let valid = bcrypt.compareSync( data.password , user.password );
                if( valid == false ){
                    res.status(401).send('email or password invalid');
                }else{

                    let payload = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        numTel: user.numTel,
                        address: user.address,
                        email: user.email,
                        password: user.password
                    }
                    let token = jwt.sign( payload , 'secret_key' );
                    res.status(200).send( { myToken: token } );
                    console.log(user);
                    console.log(token);


                }

            }

        )

        .catch(
            (err)=>{
                res.status(400).send(err)
                
            }

        )

} );


router.put(  '/update/:id'  , (req, res)=>{

    let myId = req.params.id;
    let newData = req.params.body;

    User.findByIdAndUpdate( { _id: myId } , newData )
        .then(
            (updatedUser)=>{
                res.send(updatedUser);

            }
        )

        .catch(
            (err)=>{
                res.send(err);

            }
        )

    console.log('update user done');
} );


module.exports = router;