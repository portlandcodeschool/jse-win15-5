var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        if (!isValidID(id)) // abort if id is invalid
            return null;
        // set instance properties here
        //...
        // and return instance...
        var card {
            id: id,
            rank: rankFn,
            suit: suitFn,
            name: nameFn,
            color: colorFn,
            // renderText:renderTextFn // renderText is the public name, fn is the internal
            };
        return card;
        };
//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    var isValidID = function(num) { // Returns--> true, false
        return ((typeof num)==="number") //correct type
                && (num%1 === 0)        //integer
                && num>=0 && num<=51;   //in range
    };
    //var rankNames = [...];
    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Jack','Queen','King'];
    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];


//-----------------------
// Instance Methods: 
//-----------------------

//the functions just local variables within the iffe

    function rankFn() {
        return Math.floor(this.id/4)+1;
    };
    
    function suitFn() {
        return (this.id%4)+1;
    };


    function colorFn() { // -->"red,"black",NaN
        var suit=this.suit();
        return suit && ((suit<3)? "red": "black");
    };

    function nameFn() { //--> string, NaN
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankNames[rank]+' of '+ suitNames[suit]);
    };

    //etc...

    //problem 4.
    // function renderText(cell){ // doesnt matter if there is anythin in there, just add to it
    //     cell.innerHTML += this.name();
    // }

    // function renderItemFn

// var card0 = makeCard(0) -->> create a card, put it in the document
//call it: card0.renderText(document.body)

//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(card) {
        return card
            && (typeof card === 'object') // check for null or primitive
            && (card.name === name) // check at least one method
            && ('id' in card) && isValidID(card.id); //check id
     };


    makeCard.fullSet = [];
        for (var id=0; id<52; ++id) {
        makeCard.fullSet.push(makeCard(id));
    }


    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;

