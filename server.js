var express = require('express');
var app = express();
app.get('/',function(req,res) {
    res.sendFile(__dirname+"/frontend/html/index.html");
});
app.get('/texttags',function(req,res) {
    res.sendFile(__dirname+"/frontend/html/texttags.html");
});
app.get('/clock',function(req,res) {
    res.sendFile(__dirname+"/frontend/html/clock.html");
});
app.get('/tambola',function(req,res) {
    res.sendFile(__dirname+"/frontend/html/tambola.html");
});
    
var port=process.env.PORT ||5000;
app.listen( port,function(){
console.log('web server is listening at port' + port);
});  