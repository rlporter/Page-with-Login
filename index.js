
//const we need: express, mustache, express-session, express-validator?, body-parser?
const express = require("express");
const app = express();

const mustacheExpress = require("mustache-express");
const session = require("express-session");
const expressValidator = require("express-validator");
const bodyParser = require('body-parser');
//needed for mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
//needed for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//not sure what this is for or why it's needed....?????
app.use(express.static("./"));
//needed for express-session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

//Things to Do:
//  *declare needed variables: user is an individual completing the form
//  *userList is an array of individual users that includes their username and password
//  *validLogin is a user for whom the username matches the associated password in the usersList

//**When user visits the url, send them to the root page:
//**On the root, see if the person has a validLogin:
//**If validLogin=true, display text: "You are logged in as <username>."
//**If validLogin=false (i.e., null) redirect to the /login page

app.get("/", function(req, res){
  let username = "username";
  let password = "password";
  let userList = req.session.users = [
    {username: "username",password: "password"},
    {username: "Frank", password: "smellycat6"}
  ];
  let validLogin = (req.userList.username.equals("username") && req.userList.password.equals("password"));
  if (validLogin == true){
    res.send("You are logged in as: <p> + {{username}} </p>.");
  }
  else {res.redirect('/login')
}});
//**On the login page, post the new user info to the userList when submitted
app.post("/login", function(req, res){
  userList.push(req.body.username, req.body.password);
})
//**Track the user session until 'logout' or page restart
app.use(function (req, res, next) {
  const views = req.session.views

  if (!views) {
    views = req.session.views = {}
  }});
//**Listen to the correct port to run the script and view the page.
app.listen(3000, function (req, res){
  console.log('Successfully started express application!');
});
