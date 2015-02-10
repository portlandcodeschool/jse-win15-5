//sunday february 8 notes
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


//4

var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
        //...
        // and return instance...
        return {
        	ranK: rank,
        	suit: suit,
        	name: name,
        	color: color,
        	renderText: renderText
        }
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    //var rankNames = [...];

    var ranks : ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
suites : ["Hearts", "Diamonds", "Spades", "Clubs"];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
    }

    function suit() {
    }
    function name(){

    }
    function color(){
    }

    //etc...
    function renderText(cell){
    	cell.innerHTML += this.name();
    }


//-----------------------
// Factory Methods/Data:
//-----------------------



    makeCard.isCard = function(thing) {


    };

    makeCard.fullSet = [];//<-- fill me



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;



