var makeCard = // receive factory with external name `makeCard`
(function () { //begin IIFE...
// The factory itself:
function makeCard(id) { //makeCard is also IIFE's internal name
// set instance properties here

// and return instance...
	return {
		id : id,
		rank : rankFn,
		suit : suitFn,
		name : nameFn,
		color : colorFn,
		renderText : renderText

	};
};
//--------------------------
// Private resources (internal use only)
//--------------------------
// Examples:
//function isValidID(num) {...}
//var rankNames = [...];
//-----------------------
// Instance Methods:
//-----------------------
	function rankFn() {
		return Math.floor(this.id/4)+1;
	}	
	function suitFn() {
		return (this.id%4)+1;
	}

	function colorFn() {
	    var suit = this.suit();
	    return suit && ((suit<3)? "red": "black");
	}

    function nameFn() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankNames[rank] + ' of ' + suitNames[suit]);
    }

	function renderText(cell) {
		cell.innerHTML += this.name();
	};
//etc...
//-----------------------
// Factory Methods/Data:
//-----------------------

var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
var rankAbbrs = [];
var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
var cardNames = [];


makeCard.isCard = function(thing) {
};
makeCard.fullSet = [];//<-- fill me
return makeCard; //return factory function, product of IIFE's work
})(); //end IIFE definition and run it now!


var card1 =  makeCard(1);
card1.renderText(document.body);





var makeDeque = (function() {
	function makeDeque() {
		return {
			render : renderFn;
		}

	}
  

	function renderFn(container, renderItemFn) {
		container.innerHTML = ''; //This will empty out the container(what ever we set container to)
		for (i = 0; i < this.array.length; ++i) {
			var div = document.createElement('div');
			div.className = 'dequeItem';
			container.appendChild(div);
			renderItemFn(this.array[i],div);
	
      }
    }
});//end makeDeque IFEE




// Export as node-style module:
if (typeof module != 'undefined')
module.exports = makeCard;


//calling cards
var card0 = makeCard(0);
card0.name();
card0.renderText(document.body);