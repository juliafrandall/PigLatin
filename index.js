var express = require('express')

var app = express();




app.get('*', (request, response)=>{
	response.sendFile(__dirname + '/client/index.html')
});

app.listen(process.env.PORT || 8000);

module.exports = app;

//still need to connect to database if I decide to use one
