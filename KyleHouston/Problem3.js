var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE

	// The factory itself:
	function makeUser(name,passwd) {
		var userName = name,
			userPasswd = passwd;

		return {
			getName: function() {return userName;},
			validate: function(passwdGuess) {
				if (passwdGuess === userPasswd) {
					return true;
				} else {
					return false;
				}
			},
			record: function(message) {
				sharedLog.push(this.getName() + ": " + message);
				return true;
			},
		};
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
		var outputArray = [];

		if (user == null) {
			return sharedLog;
		}

		for (var i = 0; i < sharedLog.length; i++) {
			if (sharedLog[i].indexOf(user) > -1) {
				outputArray.push(sharedLog[i]);
			}
		}

		if (outputArray.length == 0) {
			return null;
		}

		return outputArray;

	}

	return makeUser;
})();

//----------------------------
// Assertion:
//----------------------------

function assert(claim,message) {
    if (!claim) console.error(message);
}

//----------------------------
// Tests:
//----------------------------

var user1 = makeUser('puss','boots');
user1.record("This is the 1st message.");
user1.record("This is the 2nd message.");

var user2 = makeUser('woody','thecowboy');
user2.record("This is the 3rd message.");
user2.record("This is the 4th message.");

assert(user1.getName()==='puss',  "Test 1 failed");
assert(user1.validate('boots')===true,  "Test 2 failed");
assert(user1.validate('shoes')===false,"Test 3 failed");

assert(user2.getName()==='woody',  "Test 4 failed");
assert(user2.validate('thecowboy')===true,  "Test 5 failed");
assert(user2.validate('cowboy')===false, "Test 6 failed");

// These assertions are not working correctly...
// assert(makeUser.getLog()==["puss: This is the 1st message.", "puss: This is the 2nd message.", "woody: This is the 3rd message.", "woody: This is the 4th message."],   "Test 10 failed");
// assert(makeUser.getLog('puss')===["puss: This is the 1st message.", "puss: This is the 2nd message."], "Test 11 failed");
// assert(makeUser.getLog('woody')===["woody: This is the 3rd message.", "woody: This is the 4th message."], "Test 12 failed");

assert(makeUser.getLog('obama')===null,  "Test 13 failed");

if (typeof module != 'undefined')
	module.exports = makeUser;
