// var makeUser = (function() {// begin IIFE...
	
// 	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
		function makeUser(name,passwd) {

			// Return a user object with three methods:
			var user = {
				// getName()
				username : function(name){  //setters
					return name;
				},
				// set password
				password : function(passwd) { //setters
					return passwd;
				},
				//getters
				getName : function() {
					return name;
				},
				getPasswd : function() {
					return password;
				},

				//validate string
				validate : function(str) {
				(password === str ? true : false);
				}

		/*	// record(message) (Part b)
				var publicpassword = password;  */
			}
		};




/*
	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
	}
	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
*/