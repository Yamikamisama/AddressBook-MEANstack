var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res){
	console.log("I recieved a get request");

	person1 = {
    	name: 'Tim',
    	email: 'tim@email.com',
    	number: '(111) 111-1111'
    };

    person2 = {
    	name: 'Emily',
    	email: 'emily@email.com',
    	number: '(222) 222-2222'
    };

    person3 = {
    	name: 'John',
    	email: 'john@email.com',
    	number: '(333) 333-3333'
    };

    var contactList = [person1, person2, person3];
    res.json(contactList)


})

app.listen(3000);
console.log("server running on port 3000")