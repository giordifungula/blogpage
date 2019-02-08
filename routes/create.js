var express = require('express');
var router = express.Router();
var Post = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('create', {message: false});
});

router.post('/', function(req, res, next) {

    //test if data is coming through
    res.send(req.body);

    //set a new dynamic id
    var id = Post.posts.length;

    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts",
    method: "POST",
    form: {
        title: title,
        author: req.body.author,
        image: req.body.image_url,
    }
    }, function(error, response, body) {
        // console.log(body);
        //send a response message
        res.render('create', {message: 'Successfully Added.'});
        // res.body('view');
    });
})

module.exports = router;