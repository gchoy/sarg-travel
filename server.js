var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    auth = require('./middleware/auth'),
    controllers = require('./controllers');

// require and load dotenv
require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// log api requests
app.use(logger('dev'));

//redo with router?
app.get(['/', '/signup', '/login', '/logout', '/cities*', '/profile', '/posts*'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);

//post json endpoints
app.get('/api', controllers.api.index);
app.get('/api/posts', controllers.posts.index);
app.get('/api/posts/:postId', controllers.posts.show);
app.post('/api/posts', auth.ensureAuthenticated, controllers.posts.create);
app.delete('/api/posts/:postId', auth.ensureAuthenticated, controllers.posts.destroy);
app.put('/api/posts/:postId', auth.ensureAuthenticated, controllers.posts.update);



//city json endpoints
app.get('/api/cities', controllers.city.index);
app.get('/api/cities/:cityId', controllers.city.show);
app.post('/api/cities', auth.ensureAuthenticated, controllers.city.create);
app.delete('/api/cities/:cityId', auth.ensureAuthenticated, controllers.city.destroy);
app.put('/api/cities/:cityId', auth.ensureAuthenticated, controllers.city.update);


var postCtrl = controllers.posts;
//city and post routes
app.get('/api/cities/:cityId/posts', auth.ensureAuthenticated, postCtrl.cityPosts);
app.post('/api/cities/:cityId/posts', auth.ensureAuthenticated, postCtrl.create);
app.get('/api/cities/:cityId/posts/:postId', auth.ensureAuthenticated, postCtrl.show)
app.delete('/api/cities/:cityId/posts/:postId', auth.ensureAuthenticated, postCtrl.destroy);
app.put('/api/cities/:cityId/posts/:postId', auth.ensureAuthenticated, postCtrl.update);

//user and post routes
app.get('/api/users/:userId/posts', auth.ensureAuthenticated, postCtrl.userPosts);
app.post('/api/users/:userId/posts', auth.ensureAuthenticated, postCtrl.create);
//TODO for later :)
app.delete('/api/users/:cityId/posts/:postId', auth.ensureAuthenticated, postCtrl.destroy);
app.put('/api/users/:cityId/posts/:postId', auth.ensureAuthenticated, postCtrl.update);

app.listen(process.env.PORT || 3000, function () {
  console.log('sarge is on 3000 ...');
});
