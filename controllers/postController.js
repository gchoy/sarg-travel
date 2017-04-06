var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User,
    Post = db.Post;

//GET /api/posts
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

//GET /api/posts/postId
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

//POST /api/posts/
function create(req, res){
  var new_post = new Post(req.body);
  console.log('value of req.body: ', req.body);
  // console.log('new post: ', new_post);
  new_post.user = req.user_id;
  console.log('new post user ID: ', new_post.user);
  new_post.save(function(err, new_post){
    res.send(new_post);
  })
}
//DELETE  /api/posts/:postId
function destroy(req, res) {
  Post.findOneAndRemove({ _id: req.params.postId }, function(err, foundPost){

    res.json(foundPost);
  });
}

//PUT /api/posts/:postId
function update(req, res) {
   console.log('updating data', req.body);
   var id = req.params.postId;
   Post.findOneAndUpdate({_id:id}, req.body, function(err, foundPost) {

       if(err) { console.log('saving altered post failed'); }
       res.json(foundPost);
     });
}

module.exports = {
  index:index,
  show:show,
  create:create,
  destroy: destroy,
  update: update
};
