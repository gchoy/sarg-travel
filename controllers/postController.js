var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User,
    Post = db.Post;

function index(req, res) {
  Post
    .find({})
    .populate('user')
    .exec(function(err, posts){
      if (err || !posts || !posts.length) {
        return res.status(404).send({message: 'Posts not found.'})
      }
      res.send(posts);
    })
}

//TODO: Get all posts that are about a city
function cityPosts(req, res) {
  var cityId = req.params.cityId;

  Post.find({_city: cityId}, function getPostsCityForOneCity(err, posts){
    if (err || !posts) {
      return res.status(404).send({message: 'Post not found.'})
    }
    console.log('this is what is being returned: ',posts);
    res.json(posts);
  })
  .populate('_user')//this is the property of post model
}
//get all user posts
function userPosts(req, res) {
  var userId = req.user_id;
  console.log('user ID is: ', userId);
  Post.find({_user: userId}, function getPostsUserForOneCity(err, posts){
    if (err || !posts) {
      return res.status(404).send({message: 'Post not found.'})
    }
    console.log('this is being returned on user load: ', posts);
    res.json(posts);
  })
  .populate('_city')
}

function create(req, res){
  var new_post = new Post(req.body);
  new_post._user = req.user_id;//this is getting the user_id from authentication. need the auth middleware in routes in server.js
  //var cityId = req.params.cityId;
  new_post._city = req.params.cityId;//get the city id and put it here.
  console.log('this is the city id:', new_post._city);
  new_post.save(function(err, new_post){
    res.send(new_post);
  })
}

function show(req, res){
  Post
    .findById(req.params.postId)
    .populate('user')
    .exec(function(err, found_post){
      if (err || !found_post) {
        return res.status(404).send({message: 'Post not found.'})
      }

      res.send(found_post);
    })
}

function update(req, res){
  var query = {
    _id: req.params.postId
  };

  if (req.user_id) {
    query.user = req.user_id;
  }

  Post
    .findOneAndUpdate(query, req.body)
    .exec(function(err, post){
      if (err || !post) {
        console.log(post)
        return res.status(404).send({messsage: 'Failed to update post.'})
      }
      res.status(204).send();
    })
}

function destroy(req, res){
  var query = {
    _id: req.params.postId
  };

  if (req.user_id) {
    query.user = req.user_id;
  }

  Post
    .findOneAndRemove(query)
    .exec(function(err, post){
      if (err || !post) {
        return res.status(404).send({messsage: 'Failed to delete post.'})
      }
      res.status(204).send();
    })
}


module.exports = {
  index:index,
  cityPosts:cityPosts,
  show:show,
  create:create,
  destroy: destroy,
  update: update,
  userPosts: userPosts
};
