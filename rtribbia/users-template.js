var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {
		// Return a user object with three methods:
		// getName()
		// validate(str)
		// record(message) (Part b)
		var user = {
			getName: function() {
				return name;
			},
			validate: function(str) {
				return (str === passwd);
			},
			record: addLog
		}

		return user;

	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
		if (user != undefined) {
			sharedLog.forEach(function (n) { 
				if (n.split(':')[0] == user) {
					console.log(n);
				}
			});
		} else {
			sharedLog.forEach(function (n) { console.log(n); });
		}
	}


	function addLog(msg) {
		if (msg != undefined) {
			sharedLog.push(this.getName() + ': ' + msg);
			return true;
		} else {
			return msg;
			//console.log(this.getName());
		}

	}

	return makeUser;
})();

user1 = makeUser('jim','jam');
user2 = makeUser('flim','flam');
user1.record('My name is jim');
user2.record('My name is flim');

if (typeof module != 'undefined')
	module.exports = makeUser;
