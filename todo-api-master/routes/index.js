var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');
var InteractionController = require('../controllers/interaction')

/* GET home page. */

router.get('/', function(request, response, next){
  response.render('index', { title: 'Express' })  //gets a request and 'index' is the rendering response to the the get command i think.
});

router.get('/signup', function(request, response, next){
  response.render('signup', { title: 'Express' })
});

router.get('/home', function(request, response, next){
  response.render('home', { title: 'Express' })
});

router.get('/viz', function(request, response, next){
  response.render('viz', { title: 'Express' })
});

router.post('/user/add', UserController.addUser);   //database mein daalneke liye apis.
router.post('/user/login', UserController.login);
router.post('/user/logout', UserController.logout);
router.post('/user/details', UserController.details);


router.post('/interaction/add', InteractionController.add);
router.post('/interaction/details', InteractionController.details);

module.exports = router;
