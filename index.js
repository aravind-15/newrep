var express = require('express');
var app = express();
app.get('/',(req,res) =>
{res.send("hello \n everyone");

});
app.listen(process.env.port || 3000);
console.log('web server is listening at port' + (process.env.port));
