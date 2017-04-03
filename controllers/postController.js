var db = require('../models');

//GET /api/posts
function index(req, res) {
  db.Post.find({}, function(err, allPosts) {
    res.json(allPosts);
  });
}

//GET /api/posts/postId
function show(req, res) {
  db.Post.findById(req.params.postId, function(err, foundPost) {
    if(err) { console.log('postController.show error', err); }
    console.log('postController.show responding with', foundPost);
    res.json(foundPost);
  });
}

//POST /api/posts/
function create(req,res) {
 var userInput = req.body;
  console.log('body',userInput);

  db.Post.create(userInput, function(err, post){
    if (err) {console.log('error', err);}
    console.log(post);
    res.json(post);
  });
}

//DELETE  /api/posts/:postId
function destroy(req, res) {
  db.Post.findOneAndRemove({ _id: req.params.postId }, function(err, foundPost){

    res.json(foundPost);
  });
}

//PUT /api/posts/:postId
function update(req, res) {
   console.log('updating data', req.body);
   var id = req.params.postId;
   db.Post.findOneAndUpdate({_id:id}, req.body, function(err, foundPost) {

       if(err) { console.log('saving altered cat failed'); }
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
