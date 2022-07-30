

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//------------------------Installing Lodash-----------------------------------------
// Load the full build.
var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
 
// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');

//-----------------------------------------------------------------------------------

const homeStartingContent = "Welcome To DAILY JOURNAL BLOG CREATED BY AYUSH LOHMOD Your conetent will be Display down blow Go to Compose and write the new BLOG";
const aboutContent = "Hi I am Ayush Lohmod I am a Full Stack Web Developer Currently Pursuing BCA From SGT UNIVERSITY. This Blog Website I created using nodejs ejs Hope You Like It if you want to contribute to this Head over to my GITHUB Profile all the socials all on contact page";
const contactContent = "You can contact me On Twitter = @ayushlohmod, Github = @ayushlohmod";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let Posts = [];
//let PostBody = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res){
  res.render("home", {StartingContent: homeStartingContent, Posts: Posts,});
  
});

app.get("/about", function(req, res){
  res.render("about", {AboutPage: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {ContactPage: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose",);

});

app.get("/posts/:topic", function(req, res){
  const reqtitle = _.lowerCase(req.params.topic );

  Posts.forEach(function(post) {
   
  const storedtitle = _.lowerCase(post.title);

    if(storedtitle === reqtitle){
      res.render("post", {
        Posth1: post.title,
        Posthcontent: post.content
    });
  }

  });

});

app.post("/compose", function(req, res){
  
  const post = {
    title: req.body.PostTitle,
    content: req.body.PostBody
  };
Posts.push(post);
res.redirect("/");
  
});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
