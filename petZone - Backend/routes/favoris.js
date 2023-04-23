const express = require('express');
const router = express.Router();

const Favoris = require('../models/favoris');




router.post(  '/ajout' , (req, res)=>{

    let data = req.body;
    let addNewFavoris = new Favoris(data);
    var found ;

    Favoris.find()
            .populate({
                path: 'animal',
                populate: {
                    path: 'owner'
                }
              })
              .populate({
                path: 'pub_favoris',
                populate: {
                    path: 'animal owner'
                }
              })
            .exec((err, dejaFavoris) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("DEJA DANS BD: ", dejaFavoris);
                found = dejaFavoris.filter((deja) => (deja.animal._id === addNewFavoris.animal) && (deja.pub_favoris._id === addNewFavoris.pub_favoris))
                console.log("found: " + found.length);
                if(found.length == 0){

                    addNewFavoris.save()
                    .then(
                        (savedPost)=>{
                            res.send(savedPost);
                            console.log("nouveau favoris", savedPost);
                        }

                    )

                    .catch(
                        (err)=>{
                            res.send(err);
                            console.log(err);
                        }
                    )

                console.log('ajout Post Favoris done');

                }

            });
        } );

    


router.get(  '/getall'  , (req, res)=>{

        Favoris.find()
            .populate({
                path: 'animal',
                populate: {
                    path: 'owner'
                }
              })
              .populate({
                path: 'pub_favoris',
                populate: {
                    path: 'animal owner'
                }
              })
            .exec((err, favoris) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(favoris);
                console.log(favoris);
            });
        
    console.log('getall Favoris done');
} );


router.get(  '/getbyid/:id'  , (req, res)=>{

    let myId = req.params.id;

    Favoris.findOne( { _id:myId } )
        .populate("animal owner")
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

    console.log('getbyid Favoris done');
} );


router.delete(  '/delete/:id'  , (req, res)=>{

    let myId = req.params.id;

    Favoris.findByIdAndDelete( { _id: myId } )
        .then(
            (deletedFavoris)=>{
                res.send(deletedFavoris);
                console.log(deletedFavoris);
            }

        )

        .catch(
            (err)=>{
                res.send(err);
                console.log(err);
            }

        )

    console.log('delete Favoris done');
} );




module.exports = router;