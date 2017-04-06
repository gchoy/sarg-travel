var User = require("./models/user");
var Post = require("./models/post");
var db = require("./models");
// var City = require("./models/city");

var userList =[];
var postList =[];
var cityList =[];

var gchoy = new User({
    name: "gchoy"
});
console.log(gchoy);


var shaya = new User({
    name: "shaya"
})
console.log(shaya);
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
  postBy: shaya._id //this points to the object.id
  });

//City List
cityList.push({
   cityName: 'San Francisco',
   cityCountry: 'USA'
             });

cityList.push({
  cityName: 'London',
  cityCountry: 'United Kingdom'
             });


// db.User.remove({}, function(err, user){
//
//     db.User.create(userList, function(err, users){
//       if (err) { return console.log('ERROR', err); }
//       console.log("all users:", users);
//       console.log("created", userList.length, "users");
//       process.exit();
//     });
//
//   });

  db.Post.remove({}, function(err, posts){

      db.Post.create(postList, function(err, posts){
        if (err) { return console.log('ERROR', err); }
        console.log("all posts:", posts);
        console.log("created", postList.length, "posts");
        process.exit();
      });

    });

  db.City.remove({}, function(err, cities){

      db.City.create(cityList, function(err, cities){
        if (err) { return console.log('ERROR', err); }
        console.log("all cities:", cities);
        console.log("created", cityList.length, "cities");
        process.exit();
      });

      });
