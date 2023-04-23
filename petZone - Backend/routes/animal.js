const express = require('express');
const router = express.Router();
const multer = require('multer');

const Animal = require('../models/animal');




let filenameGlobal = '';

const myStorage = multer.diskStorage( {

    destination: './uploads',  //folder li yethatou fih l uploaded images
    filename: (req, file, redirect )=>{
        let date = Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];  //type l image dima yji sous forme 'image/png' wala 'esmha/jpeg'  --- fl howa lesm eli bech yetsajel 
        filenameGlobal = fl; //5ater fl accessible ken lena donc 3malna var golobal hatineha fih

        redirect( null, fl );
    }
} );

const upload = multer( { storage: myStorage } );




router.post(  '/ajout'  , upload.any('image') , (req, res)=>{

    let data = req.body;
    let animal = new Animal(data);

    animal.image = filenameGlobal;
    console.log(animal.image);
    animal.save()
        .then(
            (savedanimal)=>{
                filenameGlobal = '';
                res.send(savedanimal);
                console.log(savedanimal);
            }

        )

        .catch(
            (err)=>{
                res.send(err);
                console.log(err);
            }
        )

    console.log('ajout animal done');
} );


router.get(  '/getAllUserAnimals/:owner_id'  , (req, res)=>{

    let owner_id = req.params.owner_id;
    Animal.find( { owner: owner_id } )
        .populate('owner')
        .then(
            (Animals)=>{
                res.send(Animals);
                console.log(Animals);

            }
        )

        .catch(
            (err)=>{
                res.send(err);
                console.log(err);
            }
        )
    
    console.log('getall animal done');
} );


router.get(  '/getbyid/:id'  , (req, res)=>{

    let myId = req.params.id;

    Animal.findOne( { _id:myId } )
        .then(
            (result)=>{
                res.send(result);

            }

        )

        .catch(
            (err)=>{
                res.send(err);

            }
        )

    console.log('getbyid animal done');
} );


router.put(  '/update/:id'  , upload.any('image') , (req, res)=>{


    let myId = req.params.id;
    let newData = req.body;

    if( filenameGlobal.length > 0 ){
        newData.image = filenameGlobal
    }

    Animal.findByIdAndUpdate( { _id: myId } , newData )
        .then(
            (updatedAnimal)=>{
                res.send(updatedAnimal);

            }
        )

        .catch(
            (err)=>{
                res.send(err);

            }

        )

    console.log('update animal done');
});


router.delete(  '/delete/:id'  , (req, res)=>{

    let myId = req.params.id;

    Animal.findByIdAndDelete( { _id: myId } )
        .then(
            (deletedAnimal)=>{
                res.send(deletedAnimal);

            }

        )

        .catch(
            (err)=>{
                res.send(err);

            }

        )

    console.log('delete animal done');
} );




module.exports = router;