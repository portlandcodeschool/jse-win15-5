var makeUser = (function () { //IFEE pattern 
	var sysLog = '';

	function record(msg) {
				sysLog += this.getName() + ' : ' + msg + '\n'
		}//ends record
	
	function factory(name, pwd) {

		var user = {
			//name:name,
			// setName:function(newName) { //if we include a 'setter' this function allows an external function to change the name
			// 	name = newName;
			// },
			getName:function() {
				return name;
			},//get name function ends

			validate: function(guess) {
				return (guess === pwd);
			},//ends validate

			record: record 
		}

		return user;
	};//end make user

	makeUser.getLog = function() { 
		return sysLog;
	}

	return makeUser;

})();//ends factoryMaker

	function setUserName(userobj) {
		userobj.setName('Barney')

	}//ends setUserName



var makeUser = factoryMaker();
var anton = makeUser('anton', 'sekrit'); //this sets person's name and password
var danniel = makeUser('danniel', 'password')
person.getName(); //This will return 'anton'
person.validate('wrong');//validating the wrong should return false
person.validate('sekrit');//validating the right should return true
anton.record('blblblblblblblj');
danniel.record('lslslslslslsl');
makeUser.getLog();







