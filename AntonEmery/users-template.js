var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {

		var getName = name;
		var getPasswd = passwd;
		// Return a user object with three methods:
		var user = {
			// getName()
			username : function(name){  //setters
				return name;
			},
			// sett password
			password : function(passwd) { //setters
				return passwd;
			},
			//need getters
			getName : function() {
				return name;
			},
			getPasswd : function() {
				return password;
			}

			//validate string

		// record(message) (Part b)
			var publicpassword = password;
		};
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
	}
	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
