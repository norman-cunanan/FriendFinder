// gets data from friendData Object
var friendData = require("../data/friends.js");

// allows it to be accesible in the server with "require("./app/routing/apiRoutes")(app)" on server page
module.exports = function (app) {

	//reads the entire friendData object with route "/api/friends"
	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	})

	//receiving the user input(request), and then giving the best match(response)
	app.post("/api/friends", function (req, res) {
		
		//request
		var newFriendInput = req.body;

		for (i = 0; i < newFriendInput.scores.length; i++) {
			newFriendInput.scores[i] = parseInt(newFriendInput.scores[i]);
		}
		console.log(newFriendInput.scores);
		// res.json(newFriendInput);

		function calculateDifference(newFriendArray, oldFriendArray) {

			var totalDifference = 0;
			
			//goes through both arrays and subtract same index to find difference, then adds differences together
			for (var i=0; i < newFriendArray.length; i++) {
				totalDifference += Math.abs(newFriendArray[i] - oldFriendArray[i]);
			}
			
			return totalDifference;
		}
		
		// try to compare difference to a large value		
		var largestDifference = 51;

		for (i = 0; i < friendData.length; i++) {
			
			// console.log(friendData[i].scores)
			var oldFriendArray = friendData[i].scores;
			var newFriendArray = newFriendInput.scores;

			var finalDifference = calculateDifference(newFriendArray, oldFriendArray);

			console.log(finalDifference);

			// change largest difference to largest sum in array
			if (finalDifference < largestDifference) {
				largestDifference = finalDifference;
				bestMatch = friendData[i];			
			}

		}
		console.log(bestMatch);

		//giving a response
		res.send(bestMatch);

		friendData.push(newFriendInput);

	})
}

