var express = require('express');
var app = express();
app.get('/',(req,res) =>
{res.send("home");

});
app.get('/',(req,res) =>
{res.send("name :    ");
app.get('/',(req,res) =>
{res.send("submit :    ");

var port=process.env.PORT ||3000;
app.listen( port,function()
{


console.log('web server is listening at port' + port);
}); 