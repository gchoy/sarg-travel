var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    auth = require('./middleware/auth'),
    controllers = require('./controllers');

// require and load dotenv
require('dotenv').load();

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

app.get('/login', function loginPage (req, res) {
  res.sendFile(__dirname + '/public/templates/auth/login.html');
});

app.get('/signup', function signupPage (req, res) {
  res.sendFile(__dirname + '/public/templates/user/signup.html');
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

app.listen(process.env.PORT || 3000, function () {
  console.log('sarge is on 3000 ...');
});
