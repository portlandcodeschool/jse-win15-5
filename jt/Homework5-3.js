/*Homework 5.3
3) Secrets at all levels [25%]

5.3 a) Write a user-registration tool, a factory function makeUser(name,pwd) which accepts a
username and password and generates a user object. Once we have a user object we should be
able to do two things with it: retrieve the corresponding username and test to see if a 
provided password matches that user's password. Each user will have these methods:

    getName() returns the username;
    validate(str) takes a string and returns true if it matches that user's password.

It should not be possible, however, to modify the username or password once created nor to 
directly see the password.
*/

//template
// The factory itself:

// Return a user object with three methods:
// getName()
// validate(str)
// record(message) (Part b)

var makeUser = (function() {// begin IIFE...
var sharedLog = []; //private; accessible only from functions defined within IIFE

  
  
  function makeUser(name,passwd) {

    var user = {
      getName: getName,
      validate: validate,
      record: record
    };

    function getName() {  //this - function name () - is a function EXPRESSION 
                          //rather than a function statement [name = function()]
                         //the former is EVALUATED in the above object function call - 
    return name;
  }; 
    function validate (str) {
      if (str === passwd)
        return true;
      else
        return false;
  }; 
      
   function record (message) {
    //factory method here
     if (message !== undefined) {
     sharedLog.push(this.getName() + ": "+ message);
      //var b = [];
       //b+=sharedLog;
       //b+= " " +true;
      r = console.log(sharedLog);
     return sharedLog;
     }
     else
       return false;
  };
 return user;
}

                
                // Part b) only:
// Factory method (defined within IIFE, so can access sharedLog):
makeUser.getLog = function(user) {
//for(var i ==0; i<sharedLog.length-1;i++) {
  
  //if (sharedLog[0].slice(0,(sharedLog[0].indexOf(":"))) == user.getName) {  // sharedLog[0].length
  bName = console.log(sharedLog);
  xName = console.log(sharedLog.slice(0,sharedLog.indexOf(":")));
  
  
  if (sharedLog.slice(0,(sharedLog.indexOf("kit:"))) == user) {  // sharedLog[0].length  
  return true;
  }
  
  else
    return false;
//}


}
return makeUser;
})();
if (typeof module != 'undefined')
module.exports = makeUser;
