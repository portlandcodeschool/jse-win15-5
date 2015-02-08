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

//-----------------------
// Tests:
//-----------------------

function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);

// Test instance methods:
assert(card0.rank()===1,  "Test 1 failed");
assert(card3.rank()===1,  "Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,  "Test 4 failed");
assert(card5.suit()===2,  "Test 5 failed");
assert(card51.suit()===4, "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")


// Test failed card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test fullSet array:
assert(typeof makeCard.fullSet === 'object', "Test 40 failed");
assert(makeCard.fullSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(makeCard.fullSet[0]), "Test 42 failed")
assert(makeCard.fullSet[5].name() === card5.name(), "Test 43 failed");
assert(makeCard.fullSet[51].name() === card51.name(), "Test 44 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");