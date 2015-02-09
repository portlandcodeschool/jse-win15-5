var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
    // //if id is invalid (out of range, etc)
    if(id > 51 || typeof(id) != 'number' || id < 0) {
    return null;
    };
      
      var newCard = {
        id: id
        };
    return newCard;
    }
    
    
    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardName = makeCard.cardName;
    newCard.renderText = makeCard.renderText;
    
    
    
//--------------------------
// Private resources (internal use only)
//--------------------------
    var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 
                    'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

    var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

    // Examples:

    //function isValidID(num) {...}
    

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
      if (this.id > 51 || typeof(this.id) == 'string' || this.id < 0 || this.id%1 !== 0 || this.id == undefined) {
      return NaN;
      } else {
        var rankNumber = Math.ceil((this.id + 1) / 4); //rank number is one more than array index since arrays start at 0 but ranks starts at 1
        return rankNumber;
        }
    }

    function suit() {
       if (this.id > 51 || typeof(this.id) == 'boolean' || this.id < 0 || this.id%1 !== 0) {
        return NaN;
    } else {
    var suitNumber = (this.id % 4) + 1; //suit number is one more than array index
    return suitNumber; 
      } 
    }

    function color() {
      if (typeof(this.id) == 'string' || typeof(this.id) == 'boolean') {
    return NaN;
  } else {
    var cardColor = this.suit(this.id);
    if (cardColor >= 0 && cardColor <= 1) {
      cardColor = 'red';
    } else if (cardColor >= 2 && cardColor <= 4) {
      cardColor = 'black';
    }
  } return cardColor;
    }

    function cardName() {
      // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    // if (this.id == false || this.id < 0 || this.id > 51 || this.id%1 !== 0) {  // id == NaN does not work because NaN cannot equal NaN
    // return NaN;
    //   } else {
      var cardName = this.rank(this.id);
      var cSuit = this.suit(this.id);
      var fullName = (cardRank[cardName - 1] + ' of ' + cardSuit[cSuit - 1]);
      return fullName;
    //}
    }

    function renderText(cell) {
      cell.innerHTML += this.cardName();
    }


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
      // return true if thing is a valid card instance made by this factory
    if(thing.rank == this.rank) {  //makeCard;
      return true;
    } else {
      return false;
      }
    };

    makeCard.fullSet = [];//<-- fill me

    makeCard.fullDeck = function() {   //<-- instead, generate array of 52 card instances
  for(i=0; i<52; i++) {
  this.fullSet.push(makeCard(i));
     }
  };

  makeCard.fullDeck();

  

  return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;