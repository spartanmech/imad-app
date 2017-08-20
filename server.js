var express = require('express');// used to create the web server
var morgan = require('morgan');//used to output logs (requests to server)
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/about',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'about.html'));
    
});

app.get('/how-to',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'how-to.html'));
    
});

app.get('/tony_stark',function(req,res){
   res.sendFile(path.join(__dirname,'ui','tony stark.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/ui/JARVIS.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'JARVIS.png'));
});
var names= [];
app.get('/submit-name',function(req,res){//URL :/submit-name?name-xxxx 
    //Get the name from the request object
    var name = req.query.name;
    
    names.push(name);
    //JSON : javascript object notation
    res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
