var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
        //...
        // and return instance...
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
        return Math.floor(this.id/4)+1;
    }

    function suit() {
        return (this.id%4)+1;
    }

    function color() {
        var suit = this.suit();
        return suit && ((suit<3)? "red": "black");
    }

    function cardName() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (makeCard.rankNames[rank]+' of '+makeCard.suitNames[suit]);
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