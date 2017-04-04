<<<<<<< HEAD
=======
// require express and other modules
>>>>>>> a32056f2f3f7d935b591e87fc529473a092a6b7f
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    auth = require('./middleware/auth'),
<<<<<<< HEAD
    controllers = require('./controllers');

// require and load dotenv
require('dotenv').load();
=======
    controllers = require("./controllers");

// require and load dotenv
require('dotenv').load();
app.use(logger('dev'));
>>>>>>> a32056f2f3f7d935b591e87fc529473a092a6b7f

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

<<<<<<< HEAD
=======
app.get('/signup', function registerPage (req, res) {
  res.sendFile(__dirname + '/public/templates/user/signup.html');
});

>>>>>>> a32056f2f3f7d935b591e87fc529473a092a6b7f
app.get('/profile', function profilePage (req, res) {
  res.sendFile(__dirname + '/public/templates/user/profile.html');
});

<<<<<<< HEAD
app.get('/signup', function signupPage (req, res) {
  res.sendFile(__dirname + '/public/templates/user/signup.html');
});

// app.get('/logout', function logoutPage(req, res){
//   res.sendFile(__dirname + '/views/index.html')
// })

var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);
=======
// app.get('/templates/:name', function templates(req, res) {
//   var name = req.params.name;
//   res.sendFile(__dirname + '/views/templates/' + name + '.html');
// });


//auth api
app.post('/auth/signup', controllers.users.signup);
app.post('/auth/login', controllers.users.login);
app.get('/api/me', auth.ensureAuthenticated, controllers.users.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, controllers.users.updateCurrentUser);

>>>>>>> a32056f2f3f7d935b591e87fc529473a092a6b7f

//post json endpoints
app.get('/api', controllers.api.index);
app.get('/api/posts', controllers.posts.index);
app.get('/api/posts/:postId', controllers.posts.show);
app.post('/api/posts', controllers.posts.create);
app.delete('/api/posts/:postId',controllers.posts.destroy);
app.put('/api/posts/:postId',controllers.posts.update);



//city json endpoints
// app.get('/api', controllers.api.index);
// app.get('/api/cities', controllers.cities.index);
// app.get('/api/cities/:cityId', controllers.cities.show);
// app.post('/api/cities', controllers.cities.create);
// app.delete('/api/cities/:cityId',controllers.cities.destroy);
// app.put('/api/cities/:cityId',controllers.cities.update);

app.get(['/', '/signup', '/login', '/logout', '/profile', '/posts*'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('sarg on 3000....');
});
