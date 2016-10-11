var express = require('express')

var app = express();


app.use(express.static(__dirname + '/Client'))
// console.log(__dirname);
app.get('/', (request, response)=>{
	response.sendFile(__dirname + '/Client/index.html')
});

app.listen(process.env.PORT || 000);

module.exports = app;

//still need to connect to database if I decide to use one
