var User = require("./models/user");
var Post = require("./models/post");
var db = require("./models");

var userList =[];
var postList =[];

var gchoy = new User({
    name: "gchoy"
});
console.log(gchoy);
console.log(shaya);

var shaya = new User({
    name: "shaya"
})

//gchoy.save();
//shaya.save();

userList.push({
   name: 'gchoy',
   CurrentCity: 'San Jose',
   DateJoined: '3/31/2017',
   image: '#'
             });
userList.push({
   name: 'shaya',
   CurrentCity: 'Walnut Creek',
   DateJoined: '3/31/2017',
   image: '#'
             });

postList.push({
  title: 'Paris',
  post: 'Paris is awesom',
  postBy: gchoy._id
  });
postList.push({
  title: 'London',
  post: 'London is awesome',
  postBy: shaya._id
  });

// db.User.remove({}, function(err, user){
//
//     db.User.create(userList, function(err, users){
//       if (err) { return console.log('ERROR', err); }
//       console.log("all users:", users);
//       console.log("created", users.length, "users");
//       process.exit();
//     });
//
//   });


  db.Post.remove({}, function(err, posts){

      db.Post.create(postList, function(err, posts){
        if (err) { return console.log('ERROR', err); }
        console.log("all posts:", posts);
        console.log("created", userList.length, "posts");
        process.exit();
      });

    });
