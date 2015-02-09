var makeUser = (function() {// begin IIFE...

function factoryMaker() {
	
var syslog = '';  //private; accessible only from functions defined within IIFE


	// The factory itself:
		function makeUser(name,passwd) {

			// Return a user object with three methods:
			//3 scopes. name, passwd, and user
				var user = {
					//name : name,  
					
					getName : function() {
						return name;				//this is closure because getName has to go one level out to get name
					},
					
					validate : function(guess) {
						return(passwd === guess);
					},
					record: function(msg){
						syslog += name + ':' + msg+'\n';
					}
				}

				return user;
		}
	
	makeUser.getlog = function() {   //getlog function is a method fo the makeUser factory
		return syslog;
	}

	return makeUser;			

		
			
}



})(); //end IIFE


if (typeof module != 'undefined')
	module.exports = makeUser;
