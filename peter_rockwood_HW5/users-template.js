var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {

		// Return a user object with three methods:
		var usr = {
			getName : getName,
			validate: validate,
			record: record,
		}

		function getName() { return name};

		function validate(str){
			if(str === passwd){
				return true
			} 
			else {
				return false
			}
		}	
		return usr
		
		function record(message) {
			if(!(message === ''|| message === undefined)){
				// function to make a log object
				function logMake(message){
					var logEntry={};
					logEntry[name] = message;
					return logEntry
				};
				// push log object into sharedLog
				sharedLog.push(logMake(message));
				return true;
			} else {
				return undefined;
			}
		}
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user){
		var tempArray = [];
		if (user === undefined) {
			for(var i = 0; i < sharedLog.length; i++){
				var key = Object.keys(sharedLog[i]);
				var prop = sharedLog[i][key];
				tempArray.push(key + ': ' + prop);
			}
			return tempArray.join(',  ');

		} else {
			for(var i = 0; i < sharedLog.length; i++){
				var key = Object.keys(sharedLog[i])[0];
				if(user === key){
					var prop = sharedLog[i][key];
					tempArray.push(key + ': ' + prop);
				}
			}
			return tempArray.join(',  ');
		}
	}

	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;





bob = makeUser('bob', 'amBob');
jim = makeUser('jim', 'pswrd');
jane = makeUser('jane', '12345' )
bob.record('yo');
jim.record('i am jim');
jim.record('what about me?');
jane.record('oh really?');
jane.record('ive made terrible mistakes');
jane.record('deadly consequences');
makeUser.getLog()
