var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes: api Data first because we need the data to display in HTML
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}); 