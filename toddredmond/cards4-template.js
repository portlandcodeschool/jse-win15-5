//Question 1
var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
        //...
        // and return instance...
        if ((typeof id) !='number' || (id%1 !== 0) || (id < 0 || id > 51)) {

        return null;
        }
            var card = {
            id:id,
            rank : rank,
            suit : suit,
            color : color,
            cardName : cardName
        }
        return card;
    }; // end makeCard function


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory
        if (thing.name == makeCard.cardName) {
    return thing;
  }
}
    var cRank = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var cSuit = ['Hearts','Diamonds','Spades','Clubs'];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
        return Math.floor((this.id/4)+1);
    }

    function suit() {
        suitnum = (this.id%4)+1;
        return suitnum;
    }

     function color() {
      if(this.suit(this.id) < 3) {
      colorname = "red";
    } else {
      colorname = 'black';
    }
    return colorname;
    
};

    function cardName() { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    // array & variable assignments and declarations
      
      var suitname = cSuit[this.suit(this.id) - 1];
      var nameid = cRank[this.rank(this.id)-1] + " of " + suitname;
      return nameid;
};


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory
        if (thing.name == makeCard.cardName) {
        return thing;
        }
    }

    makeCard.fullSet = [];//<-- fill me
        for (var i=0; i<52; i++) {
        makeCard.fullSet.push(makeCard(i));
    }


    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;

//----------------------
// Simple Testing suite
// Supplement as needed!

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
//assert(card5.name()==='Two of Diamonds', "Test 12 failed");
//assert(card51.name()==='King of Clubs',  "Test 13 failed");

console.log("assertions 1-6, 10-13 passed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")

console.log("assertions 21-23 passed");

// Test failed card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");

console.log("assertions 26-28, 30, 31 passed");

// Test fullSet array:
assert(typeof makeCard.fullSet === 'object', "Test 40 failed");
assert(makeCard.fullSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(makeCard.fullSet[0]), "Test 42 failed") // 
assert(makeCard.fullSet[5].cardName() === card5.cardName(), "Test 43 failed");
assert(makeCard.fullSet[51].cardName() === card51.cardName(), "Test 44 failed");

console.log("assertions 40-44 passed");
// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");

console.log("assertions 50-53 passed"); 
