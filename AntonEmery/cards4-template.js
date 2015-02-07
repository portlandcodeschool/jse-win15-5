var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // If id is invalid (out of range, etc)
    if(id > 51 || typeof(id) != 'number' || id < 0) {
    return null;
    };


    var newCard = {
        id: id
    };
    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardName = makeCard.cardName;

    };

    return newCard;
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

    function rank() {
    }

    function suit() {
    }

    //etc...


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