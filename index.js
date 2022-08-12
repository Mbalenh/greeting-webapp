const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting= require('./greet');
const flash = require('flash-express')

const app = express()
const greeting = Greeting();

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json()) 
app.use(flash());

app.get('/', function (req, res) {
 let name = greeting.username
 let language = greeting.language
let message= greeting.greet(name,language)
  greeting.username =""
  greeting.language=""
    res.render('index' ,{
    message: message,
      count:  greeting.nameArray.length
      // count: greeting.addName(name, language)
    });  
});

app.post('/greeted', function(req, res){
greeting.username = req.body.fullname,
greeting.language = req.body.language
res.redirect('/');
});

app.get('/counter/:username', function(req, res){
  let user = req.params.user;
  res.render('counter',{user, nameArray})
  res.redirect('/');
  });


const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
}); 