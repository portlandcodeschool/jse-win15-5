var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {
		var instance = {}
		instance.name = name; 
		instance.passwd = passwd; 
		// Return a user object with three methods:
		function getName(name) {
			return instance.name;
		}
		function validate(str) {
			return str === passwd;
		}
		// function record(message) (Part b)
		return instance;
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
	}

	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;





/* CLASS EXAMPLE

function storePassword(passwd) {
    var password = passwd;
    function passwordCheck(val) {
        return val == password;
    }
    return passwordCheck; 
    //...code here...
}

// Use it like this:
var verifyPassword = storePassword("sekrit");

verifyPassword("password"); // false
verifyPassword("12345"); // false
verifyPassword("sekrit"); // true

*/
