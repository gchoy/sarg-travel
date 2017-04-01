var db = require('../models');

//GET /api/cats
function index(req, res) {
  db.Post.find({}, function(err, allPosts) {
    res.json(allPosts);
  });
}

//GET /api/cats/catId
function show(req, res) {
  db.Post.findById(req.params.postId, function(err, foundPost) {
    if(err) { console.log('postController.show error', err); }
    console.log('postController.show responding with', foundPost);
    res.json(foundPost);
  });
}

//POST /api/cats/
function create(req,res) {
  var post = new db.Post ({
   title: req.body.title,
   post: req.body.owner,
   postBy: req.body.postBy,

 })//req.body
  console.log('body',req.body);

  db.Post.create(req.body, function(err, post){
    if (err) {console.log('error', err);}
    console.log(post);
    res.json(post);
  });
}



module.exports = {
  index:index,
  show:show,
  create:create
  // destroy: destroy,
  // update: update
};
