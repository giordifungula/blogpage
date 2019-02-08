var express = require('express');
var router = express.Router();
var Post = require('../db.json');
var request = require("request");

/* GET Create post. */
router.get('/create', function (req, res, next) {
    res.render('create');
  });
  
  router.post('/create', function (req, res, next) {
    // res.(req.body);
    let obj = {
      "title": req.body.title,
      "author": req.body.author,
      "date": req.body.date,
      "content": req.body.content,
      "story": req.body.story
    }
  
    request.post({
      url: 'http://localhost:8000/posts',
      body: obj,
      json: true
    }, function (error, response, body) {
      res.redirect('/');
    });
  });
module.exports = router;