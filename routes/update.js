var express = require('express');
var router = express.Router();
var Post = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/:pokeId', function(req, res, next) {

    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/" + req.params.pokeId,
    method: "GET",
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('update', {message: false, poke: JSON.parse(body)});
    });
  
});

router.post('/:pokeId', function(req, res, next) {

    // console.log(req.body)
    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/"+ req.params.pokeId,
    method: "PATCH",
    form: {
        title: req.body.title,
        author: req.body.author,
        image: req.body.image_url,
    }
    }, function(error, response, body) {
        console.log(body);
        //send a response message
        res.render('update', {message: 'Successfully Added.', post: JSON.parse(body)});
    });
})

module.exports = router;