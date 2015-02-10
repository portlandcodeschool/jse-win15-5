// Homework #5.3 
var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE

	// The factory itself:
	function makeUser(name,pwd) {
		// Return a user object with three methods:
		// validate(str)
		// record(message) (Part b)
        var user = {
            name: name,
            getName: function() {
                return name;
            }

		};
        return user;
	}


	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
	}

	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;



var person = makeUser("Kip", "sekrit");
person.userGetname();
