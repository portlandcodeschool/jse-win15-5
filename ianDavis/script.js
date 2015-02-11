//1
var makeCard = (function() {

		function makeCard(id) {
	    // If id is invalid (out of range, etc)
	    if (!makeCard.isValidID(id)) // abort if id is invalid
	       return null;

	    return {id:id,
	            rank : makeCard.rank,
	            suit : makeCard.suit,
	            color: makeCard.color,
	            name : makeCard.cardName
	    }
	}

	//-----------------------
// Instance Methods:
//-----------------------

	makeCard.rank = function() { // --> 1..13, NaN
	    return Math.floor(this.id/4) + 1;
	};

	makeCard.suit = function() { // --> 1..4, NaN
	    return (this.id % 4) + 1;
	};
	   
	makeCard.color = function() { // -->"red,"black",NaN
	    var suit=this.suit();
	    return suit && ((suit<3)? "red": "black");
	};

	makeCard.rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
	                        'Jack','Queen','King'];
	makeCard.suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	makeCard.cardName = function() { //--> string, NaN
	    // This method can't have the key 'name' within the makeCard function,
	    // but instance objects can store a reference to it called 'name'
	    var rank = this.rank();
	    var suit = this.suit();
	    return rank && suit && (makeCard.rankNames[rank]+' of '+makeCard.suitNames[suit]);
	};


	//-----------------------
// Factory Methods/Data:
//-----------------------

	makeCard.isValidID = function(num) { // Returns--> true, false
	        return ((typeof num)==="number") //correct type
	                && (num%1 === 0)        //integer
	                && num>=0 && num<=51;   //in range
	}

	makeCard.isCard = function(thing) { // --> true,false
	    // return true if thing is a valid card instance made by this factory
	    return thing
	            && (typeof thing === 'object') // check for null or primitive
	            && (thing.name === makeCard.cardName) // check at least one method
	            && ('id' in thing) && makeCard.isValidID(thing.id); //check id
	}

	//---------------------
	// Additional factory properties
	//---------------------

	makeCard.fullSet = [];
	for (var id=0; id<52; ++id) {
	    makeCard.fullSet.push(makeCard(id));
	}

	return makeCard;
})();

// Export as node-style module:
// if (typeof module != 'undefined')
//     module.exports = makeCard;

var card1 = makeCard(34);





//3a

function makeUser(name,passwd) {
	var user = {
	
	getName: function(){
		return name;
		}
	},
	validate: function(guess){
		return (guess === passwd);
	}
	return user;
}

//b

function factoryMaker(){
	var sysLog = '';


	function makeUser(name,passwd) {
		var user = {
		
		getName: function(){
			return name;
			},

		validate: function(guess){
			return (guess === passwd);
		},
		record: function(msg){
			sysLog += name+ ':' msg+ '\n';
		}
	};
		return user;
	}

	makeUser.getLog = function(){
		return syslog;
	}
	return makeUser;
}
 

 //or

 function factoryMaker(){
	var sysLog = '';

	function record(msg){
		sysLog += this.getName()+ ' :' msg+ '\n';
	}	

	function makeUser(name,passwd) {
		var user = {
		
		getName: function(){
			return name;
			},

		validate: function(guess){
			return (guess === passwd);
		},
		record: record;
		
	};
		return user;
	}
	makeUser.getLog = function(){
		return syslog;
	}
	return makeUser;
}



var makeUser = (function () { 
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


//4