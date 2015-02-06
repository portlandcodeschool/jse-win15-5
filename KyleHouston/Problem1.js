var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        if ((id > 51) || (id < 0) || (typeof id !== 'number') || (id % 1 !== 0)) {
            return null;
        }

        var card = { 
            id: id,
            rank: rank,
            suit: suit,
            color: color,
            name: cardName,
        }

        return card;
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    var cardString = [
        'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King' 
    ];

    var suitName = [
        'Hearts', 'Diamonds', 'Spades', 'Clubs'
    ];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
        var cardRank = Math.ceil(this.id/4);
        if ((this.id % 4) == 0) {
            cardRank++;
        }

        return cardRank;
    };

    function suit() {
        return (this.id % 4) + 1;
    };

    function color() {
        var cardColor;

        if ((this.suit(this.id) == 1) || (this.suit(this.id) == 2)) {
            cardColor = "red";  
        } else if ((this.suit(this.id) == 3) || (this.suit(this.id) == 4)){
            cardColor = "black";
        };

        return cardColor;
    };

    function cardName() {
        return cardString[(this.rank(this.id) - 1)] + ' of ' + suitName[(this.suit(this.id) - 1)];
    };



//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
        if ((typeof thing !== 'object') || (typeof thing.rank !== 'function') ) {
            return false;
        } else {
            return true;
        }
    };

    makeCard.fullSet = [];
    for (var i = 0; i < 52; i++) {
        makeCard.fullSet[i] = makeCard(i);
    }



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;