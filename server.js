var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/userListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/usersDb');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/usersListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('userlist list RESTful API server started on: ' + port);