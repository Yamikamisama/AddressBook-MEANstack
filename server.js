var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res){
	console.log("I recieved a get request")

})

app.listen(3000);
console.log("server running on port 3000")