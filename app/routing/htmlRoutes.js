//allows us to deliever HTML pages; built into node
var path = require("path");

//allows it to be accesible in the server with "require("./app/routing/apiRoutes")(app)" on server page
module.exports = function (app) {

	//shows home.html with "/" route
	app.get("/", function(req, res) {
  		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	//shows survey.html with "/survey" route
	app.get("/survey", function(req, res) {
    	res.sendFile(path.join(__dirname, "/../public/survey.html"));
  	});

}

