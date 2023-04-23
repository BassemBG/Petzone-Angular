const express = require('express');
const router = express.Router();

const Post = require('../models/post');




router.post(  '/ajout' , (req, res)=>{

    let data = req.body;
    let post = new Post(data);

    post.save()
        .then(
            (savedPost)=>{
                filenameGlobal = '';
                res.send(savedPost);
                console.log(savedPost);
            }

        )

        .catch(
            (err)=>{
                res.send(err);
                console.log(err);
            }
        )

    console.log('ajout Post done');
} );


router.get(  '/getall'  , (req, res)=>{

    Post.find()
        .populate("animal owner")
        .then(
            (Posts)=>{
                res.send(Posts);
                console.log(Posts);

            }
        )

        .catch(
            (err)=>{
                res.send(err);
                console.log(Posts);
            }
        )
    
    console.log('getall Post done');
} );


router.get(  '/getbyid/:id'  , (req, res)=>{

    let myId = req.params.id;

    Post.findOne( { _id:myId } )
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

    console.log('getbyid Post done');
} );


router.put(  '/update/:id' , (req, res)=>{


    let myId = req.params.id;
    let newData = req.body;

    Post.findByIdAndUpdate( { _id: myId } , newData )
        .then(
            (updatedPost)=>{
                res.send(updatedPost);

            }
        )

        .catch(
            (err)=>{
                res.send(err);

            }

        )

    console.log('update Post done');
});


router.delete(  '/delete/:id'  , (req, res)=>{

    let myId = req.params.id;

    Post.findByIdAndDelete( { _id: myId } )
        .then(
            (deletedPost)=>{
                res.send(deletedPost);

            }

        )

        .catch(
            (err)=>{
                res.send(err);

            }

        )

    console.log('delete Post done');
} );




module.exports = router;