var express = require('express');
var app = express();

//add the route
app.use(require('./routes/hello-world-route.js'));
//set the port
app.set('port', 3000);
//start the server
var server = app.listen(app.get('port'), function() {
    console.log("listening on port " + app.get('port'));
});
