var makeCard = // receive factory with external name `makeCard`
    (function() { //begin IIFE...

    // The factory itself:
    function makeCard(id) {
        return {
            id: function(){return id},
            rank: rank,
            suit: suit,
            color: color,
            cardName: cardName,
        };
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    makeCard.isIntegerInRange = function(input, rangeMin, rangeMax){
        if(typeof(input) != 'number' || input%1 != 0){
            return false
        } else if(input < rangeMin || input > rangeMax){
            return false
        } else {
            return true
        }
    };
    //var rankNames = [...];
    var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

//-----------------------
// Instance Methods:
//-----------------------

    // var ID = function(){
    //     return id;
    // }

    var rank = function() { // --> 1..13, NaN
        return Math.ceil((this.id()+1)/4);
    };


    var suit = function() { // --> 1..4, NaN
        return (this.id()%4) + 1;
    };

    var color = function() { // -->"red,"black",NaN
        if(this.suit() <= 2) {
            return 'red';
        } else {
            return 'black';
        }
    };

    var cardName = function() { //--> string, NaN
        var rankName = cardRank[this.rank() -1];
        var suitName = cardSuit[this.suit() -1];

        return rankName + ' of ' + suitName;
    };

    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

     makeCard.isCard = function(thing) { // --> true,false
        if(typeof thing != 'object') {
            return false
        }
        for(keys in thing) {
            if (! (keys in {id:'', rank:'', suit:'', color:'', name:''})){
                return false
            }
        }
        return true
    };

    makeCard.fullSet = []; 
    for(var i = 0; i < 52; i++){
        makeCard.fullSet[i] = makeCard(i);
    }



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;