// Homework #5.1 == Cards Module

// receive factory with external name `makeCard`
var makeCard = (function () { //begin IIFE...
    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
    // set instance properties here
    //...
    // and return instance...
      if (!isValid(id))
        return null;

      return {id: id,
        rank: rank,
        suit: suit,
        color: color,
        name: cardName
      };
    }

  //--------------------------
  // Private resources (internal use only)
  //--------------------------

    function isValid(id) {
      return ((typeof id) === "number") && (id%1 === 0) && id >=0 && id <= 51;
    }
    var rankName = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var suitName = ["", "Hearts", "Diamonds", "Spades", "Clubs"];


  //-----------------------
  // Instance Methods:
  //-----------------------

    function rank() {
      return Math.floor(this.id/4) + 1;
    }

    function suit() {
      return (this.id%4) + 1;
    }

    function color() {
      var suitColor = this.suit();
      return suitColor && ((suitColor < 3) ? "red" : "black");
    }

    function cardName() {
      var rank = this.rank();
      var suit = this.suit();
      return rank && suit && (rankName[rank] + " of " + suitName[suit]);
    }

  //-----------------------
  // Factory Methods/Data:
  //-----------------------

    makeCard.isCard = function(thing) {
      return thing
        && (typeof thing === 'object')
        && (thing.name === cardName)
        && ('id' in thing) && isValid(thing.id);
    };

    makeCard.fullSet = [];//<-- fill me

    for (var id = 0; id < 52; ++id) {
      makeCard.fullSet.push(makeCard(id));
    }

    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;