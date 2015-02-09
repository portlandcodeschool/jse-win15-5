var makeCard = // receive factory with external name `makeCard`
    (function() { //begin IIFE...

        // The factory itself:
        //________________________________________________________________________ makeCard
        function makeCard(id) { //makeCard is also IIFE's internal name
            // set instance properties here
            makeCard.fullSet = [];
            // If id is invalid (out of range, etc)
            if (makeCard.isValidID(id)) {
                // **** properties of each card
                var theNewCard = {};
                theNewCard.id = id;
                theNewCard.rank = makeCard.rank;
                theNewCard.suit = makeCard.suit;
                theNewCard.color = makeCard.color;
                theNewCard.name = makeCard.getCardName;
                // ****
                return theNewCard;
            } else {
                return null; // bad ID
            }
        };
       

        //--------------------------
        // Private resources (internal use only)
        //--------------------------
        //________________________________________________________________________ isValidID
        makeCard.isValidID = function(id) {
            // validate inputs
            if (!((typeof id === 'number') && (id % 1 === 0) // is integer
                && id < 52 // is in range
                && id >= 0)) // is in range
            {
                return false; // INPUT ERROR
            } else {
                return true;
            }
        };
        

        //________________________________________________________________________ makeFullSet
        makeCard.makeFullSet = function(cardSet) {
            for (var i = 0; i < 52; i++) {
                cardSet[i] = makeCard(i);
            }
            makeCard.printFullSet(cardSet);
        };

        //________________________________________________________________________ printFullSet
        makeCard.printFullSet = function(fullSet) {
            
            console.log("Here is the fullSet **** >");
            for (var i = 0; i < fullSet.length; i++) {
                console.log("Card ID=" + i + " name() returned: " + fullSet[i].name());
            }
        };

        //________________________________________________________________________ stringVariables
        // stringVariables
        var suitNames = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var rankNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];


        //-----------------------
        // Instance Methods:
        //-----------------------
        //________________________________________________________________________ rank
        makeCard.rank = function() { // --> 1..13, NaN
            return Math.trunc(this.id / 4) + 1;
        };
        
        //________________________________________________________________________ suit
        makeCard.suit = function() { // --> 1..4, NaN
            return (this.id % 4) + 1;
        };
        
        //________________________________________________________________________ color
        makeCard.color = function() { // -->"red,"black",NaN
            var cardColor = NaN;
            if ((this.suit(this.id) === 0) || (this.suit(this.id) === 1)) {
                cardColor = "red";
            } else {
                cardColor = "black";
            };
            return cardColor;
        };
        
        //________________________________________________________________________ getCardName
        makeCard.getCardName = function() { 
            var cardName = "";
            cardName = rankNames[this.rank(this.id) - 1] + " of " + suitNames[this.suit(this.id) - 1];
            return cardName;
        };
       

        //-----------------------
        // Factory Methods/Data:
        //-----------------------
        //________________________________________________________________________ isCard
        makeCard.isCard = function(cardObj) {
            
            if (typeof cardObj === 'undefined') {
                return false;
            } // basic Garbage-in test

            var isACard = true;
            if (!(makeCard.isValidID(cardObj.id))) {
                isACard = false;
            };
            if (isACard && // TODO add more robust validations here
                !(('rank' in cardObj) &&
                    ('suit' in cardObj) &&
                    ('color' in cardObj) &&
                    ('name' in cardObj))) {
                isACard = false;
            };
            return isACard;
        };


        // full set of cards (per factory)
        //________________________________________________________________________ fullSet
        makeCard.fullSet = []; //<-- fill me
        makeCard.makeFullSet(makeCard.fullSet);

        return makeCard; //return factory function, product of IIFE's work
   //________________________________________________________________________ IIFE --> END     
    })(); //end IIFE definition and run it now!

console.log(makeCard);


// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;

//________________________________________________________________________ TESTING
// Simple Testing suite
// Supplement as needed!
function assert(claim, message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
console.log("\n-START------ card instances needed for assertions");
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);
console.log("-END-------- \n");

console.log("\n-START-------- starting rank, suit, color, name tests");
assert(card0.rank() === 1, "Test 1 failed");
assert(card3.rank() === 1, "Test 2 failed");
assert(card51.rank() === 13, "Test 3 failed");
assert(card0.suit() === 1, "Test 4 failed");
assert(card5.suit() === 2, "Test 5 failed");
assert(card51.suit() === 4, "Test 6 failed");
assert(card0.color() === 'red', "Test 10 failed");
assert(card3.color() === 'black', "Test 11 failed");
assert(card5.name() === 'Two of Diamonds', "Test 12 failed");
assert(card51.name() === 'King of Clubs', "Test 13 failed");
console.log("-END-------- \n");

console.log("\n-START-------- starting Test makeCard.isCard & makeCard");
// Test makeCard.isCard:
assert(makeCard.isCard(card0), "Test 21 failed");
assert(makeCard.isCard(card51), "Test 22 failed");
assert(!makeCard.isCard(0), "Test 23 failed");
assert(!makeCard.isCard({}), "Test 24 failed");
// Test failed card-making results:
assert(!makeCard(52), "Test 26 failed");
assert(!makeCard("0"), "Test 27 failed");
assert(!makeCard(-1), "Test 28 failed");
assert(!makeCard(false), "Test 30 failed");
assert(!makeCard(true), "Test 31 failed");
console.log("-END-------- \n");

console.log("\n-START-------- starting Test fullset factory array");
// // Test fullSet array:
// cardSet must be made externally, not like in HW4 where we could get the internal fullDeck out. (it won't come out to play anymore!)
var cardSet = [];
makeCard.makeFullSet(cardSet);
assert(cardSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(cardSet[0]), "Test 42 failed")
assert(cardSet[5].name() === card5.name(), "Test 43 failed");
assert(cardSet[51].name() === card51.name(), "Test 44 failed");
// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
console.log("-END-------- \n");
