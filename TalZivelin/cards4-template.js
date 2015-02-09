var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
       if (!(Number.isInteger(id)) || id < 0 || id > 51 ) {
        return null;
    }
		
	 var card = {
		id: id,
		rank : rank,
		suit : suit,
		color : color,
		cardName : cardName
	  }
  
  return card
  
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    //var rankNames = [...];
	
	 var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King'];
      var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];
	
	 
//-----------------------
// Instance Methods:
//-----------------------

    function rank() {		
		return  Math.floor(this.id/4)+1
    }

    function suit() {
		return (this.id%4)+1
    }
	
	function color() {
	  return (this.suit(this.id) < 3)? "red": "black"
	};
	
	
	function cardName() {
	 	return rankNames[this.rank(this.id)] + ' of ' + suitNames[this.suit(this.id)];
	};


    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(id) { // --> true,false
    // return true if thing is a valid card instance made by this factory
	if (id.name == makeCard.cardName)
	 {
    	return true;
  }
}

   makeCard.fullSet = []; //<-- instead, generate array of 52 card instances
	for (var i = 0; i < 52; i++){
		makeCard.fullSet.push(makeCard(i));
	}



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;
	


console.log("This function is an IIFE that can be run by calling makeCard")

