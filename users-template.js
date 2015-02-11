function makeUserFactory() {
  var syslog = '';
function makeUser(name,pwd) {
  //function record(msg) {
    //syslog += this.getName() + ':' + mesg + '\n'
 // }
user = {
   
  //setName : function(newName) {
  //  name = newName;
  //},
  getName : function() {
  return name; 
    
},// end of anonymous getName function
  validate : function(guess) {
      return (pwd === guess);
  }, //end of validate function
  record : function(message) {
    syslog += name + ':' + message + '\n'
  } //end of record function
} //end of user object
return user;
}//end of makeUser function
  makeUser.getLog = function() {
    return syslog;
  }
  return makeUser // return factory made within function
} // end of makeUserFactory
var makeUser = makeUserFactory(); // run one time ot create system log once. Persistant variable
var person = makeUser('anton','sekrit')

//person.validate('sekrit');
//person.record('wow!');
//console.log(makeUser.getLog())