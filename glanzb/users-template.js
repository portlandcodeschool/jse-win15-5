// var makeUser = (function() {// begin IIFE...
/*
function factoryMaker(){
	var sharedLog = [];  //private; accessible only from functions defined within IIFE
	//outside of factory, because shared, should not be reset every time the factory is run

	function record(msg){
		sharedLog+= this.getName() + " : " + msg + "\n";	// cant be name, has to be accesssed with the getname function
	}

	// The factory itself:
		function makeUser(name,passwd) {
			var user = {
				// name: name, --> security problem, can be set like this
				getName: function(){
					return name;
				},
				validate: function(guess){
		        return (guess === passwd); // boolean
				},
				record: record	// made it a shared function
				// record: function(msg){
				// 	sharedLog += name + " : " + msg; // add the (local)message string to the name string in the log
				// }
			};
			return user; 
		}

	makeUser.getlog = function(){	// has to be a method of the factory
		return sharedLog;shared
	}

	return makeUser;
});

var makeUser = factoryMaker();		// call it to make user, iffe starts the user factory, otherwise it cant start making individuals
var anton = makeUser("Anton","sekrit");
anton.validate("wrong");	// returns false
Anton.record ("1/4 through the class")


if (typeof module != 'undefined')
	module.exports = makeUser;
*/

// or iffe

var makeUser = (function() {// begin IIFE... get rid of the name and call it right away, so you dont have to call it befor making individuals
// makeUser saves the name, captures what comes out of the factory
// otherwise the iffe would be ran once and thrown away right away
	var sharedLog = [];  //private; accessible only from functions defined within IIFE
	//outside of factory, because shared, should not be reset every time the factory is run

	function record(msg){
		sharedLog+= this.getName() + " : " + msg + "\n";	// cant be name, has to be accesssed with the getname function
	}

	// The factory itself:
		function makeUser(name,passwd) {
			var user = {
				// name: name, --> security problem, can be set like this
				getName: function(){
					return name;
				},
				validate: function(guess){
		        return (guess === passwd); // boolean
				},
				record: record	// made it a shared function
				// record: function(msg){
				// 	sharedLog += name + " : " + msg; // add the (local)message string to the name string in the log
				// }
			};
			return user; 
		}

	makeUser.getlog = function(){	// has to be a method of the factory
		return sharedLog;
	};

	return makeUser;
})();

var anton = makeUser("Anton","sekrit");
anton.validate("wrong");	// returns false
anton.record ("1/4 through the class")


// dan"s solution

/*
var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE

	function writeToLog(str) {
		// writeToLog doesn't need private access to name/passwd,
		// so might as well make it shared between users
		sharedLog.push(this.getName() + ':' + str);
		return true;
	}

	// The factory itself:
	function makeUser(name,passwd) {
		// name and passwd are private; accessible only from two functions defined within makeUser
		var user = {
			// personal methods specific to each user, with access to name/passwd:
			getName: function () {return name},
			validate: function (tryPasswd) {return tryPasswd === passwd},
			// method shared by all users:
			record: writeToLog	// could also put writeToLog defn here,
								// making it a personal method
		}; 
		return user;
	}

	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) { //user can be either name or object
		if (!user)
			return sharedLog.join('\n'); // return entire log as string
		if (typeof user === 'object') // if user is obj, make it a name string:
			user = user.getName();

		function matchesUser(line) {//nested helper function, finds userName by closure
			var halves = line.split(':');
			return halves[0] === user;
			// alternative: copy line up to but excluding first ':'
			// var prefix = line.slice(0,line.indexOf(':')); 
			// return prefix === user;
		}
		var usersLines = sharedLog.filter(matchesUser);
		return usersLines.join('\n'); // return only user's lines
	}

	return makeUser;  //external link to makeUser preserves IIFE scope (including sharedLog)
})(); //do this IIFE now!


if (typeof module !== "undefined") {
    module.exports = makeUser;
}
*/
