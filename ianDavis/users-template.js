var makeUser = (function() {
	
	(function () { 
	var sysLog = '';

	function record(msg) {
				sysLog += this.getName() + ' : ' + msg + '\n'
		},
	
	function factory(name, pwd) {

		var user = {
			getName:function() {
				return name;
			},

			validate: function(guess) {
				return (guess === pwd);
			},

			record: record; 
		}

		return user;
	};
	makeUser.getLog = function() { 
		return sysLog;
	}

	return makeUser;

})();

function setUserName(userobj) {
		userobj.setName('Georgie')

	}

if (typeof module != 'undefined')
	module.exports = makeUser;
