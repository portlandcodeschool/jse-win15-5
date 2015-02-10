// Homework #5.3a 
var makeUser = (function() {// begin IIFE...
//function makeUser() { // only allowed to return one item (the factory)

	var sharedLog = [];  //private; accessible only from functions defined within IIFE

    function record(message) {
        sharedLog += this.getName()+': '+message+'\n';
    }
	// The factory itself:
	function factory(username,pwd) {
		// Return a user object with three methods:
        // getName()
		// validate(str)
		// record(message) (Part b)
        var user = {
            getName: function() { // getter method that uses closure is read-only
                return username;
            },
            validate: function(guess) {
                return (guess === pwd);
            },
            record: record
            // record: function(message) {
            //     sharedLog += username+': '+message+'\n';
            //     return true; 
            //}
		};
        return user;
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	factory.getLog = function(user) {
        return sharedLog;
	};

	return factory;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;

// call the functions
// var makeUser = makeUser(); // first time a factory is made
var person1 = makeUser('Ondine', 'seekrit'); // person is a global var
person1.getName();
person1.validate('wrong');
person1.validate('seekrit');
person1.record('something fierce');
makeUser.getLog();
