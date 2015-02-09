var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {

		
		var user	 = {
			name : name,
			passwd : passwd,
      
			getName : function(){
				return this.name;
			},
      
      		validate : function(str){
				return (this.passwd === str);
			}
      
		}
    

		
		return user
    
    
		// Return a user object with three methods:
		// getName()
		// validate(str)
		// record(message) (Part b)
	}
	
	
	

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	/*makeUser.getLog = function(user) {
	}*/

	return makeUser;
})();


/*if (typeof module != 'undefined')
	module.exports = makeUser;


function storePassword(passwd) {
   
  return function(guess){
   
    return (guess === passwd);
  } 
  
};*/

User01 = makeUser("bob", "pass");
User01.validate("pass")

console.log("this is the getName function " + User01.getName());
console.log("this is the validate function correct password " + User01.validate("pass"));
console.log("this is the validate function incorrect password " + User01.validate("passs"))
