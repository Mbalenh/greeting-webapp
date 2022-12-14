const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting= require('./greet');
const flash = require('express-flash')
const session= require('express-session')

const app = express()
const greeting = Greeting();

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json()) 
app.use(session({
    secret : "Mbali",
    resave : false,
    saveUninitialized: true,
     cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', function (req, res) {
 let name = greeting.username
 let language = greeting.language
let message= greeting.greet(name,language)
// let clear= greeting.clearArray()
// let messages= greeting.errorMessage(name,language)
  greeting.username =""
  greeting.language=""
    res.render('index' ,{
    message: message,
      count:  greeting.getCounter(),
      // clear: clear
      // count: greeting.addName(name, language)
    });  
});
app.post('/clear', function (req, res) {
 greeting.clearArray()
  
res.redirect('/');
}); 

app.post('/greeting', function(req, res){
    let error = greeting.errorMessage(req.body.fullname,req.body.language)
    if (error) {
       req.flash('info', error)
    }else{
      greeting.username = req.body.fullname
      greeting.language = req.body.language
      greeting.insertNames(req.body.fullname)
    }
 

res.redirect('/');
});

app.get('/greeted' , function(req,res){
  let names= greeting.getNames()
  console.log(names)
res.render('greeted',{
  names
})
})

app.get('/counter/:username', function(req, res){
  let user = req.params.username;
  let counter= greeting.counterName(user)

  res.render('counter',{user, counter})
  
  });


const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});  