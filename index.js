var express = require('express');
var app = express();
app.get('/',(req,res) =>
{res.send("hello \n everyone");

});
var port=process.env.PORT ||3000;
app.listen( port,function()
{


console.log('web server is listening at port' + port);
});