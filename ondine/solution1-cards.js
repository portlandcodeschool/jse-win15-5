// Homework #5.1 == Cards Module
// Problem #5.4 - updates

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
            rank: rankFn,
            suit: suitFn,
            color: colorFn,
            name: nameFn,
            shortName: shortNameFn,
            renderText: renderTextFn,
            renderImage: renderImageFn
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
//    var rankAbbr = ["", 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//    var suitAbbr = ["", 'H', 'D', 'S', 'C'];

    //-----------------------
    // Instance Methods:
    //-----------------------

    function rankFn() {
        return Math.floor(this.id/4) + 1;
    }

    function suitFn() {
        return (this.id%4) + 1;
    }

    function colorFn() {
        var suitColor = this.suit();
        return suitColor && ((suitColor < 3) ? "red" : "black");
    }

    function nameFn() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankName[rank] + " of " + suitName[suit]);
    }

    //Problem 5.4a)  write card instance method
    function shortNameFn() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankName[rank].charAt(0) + suitName[suit].charAt(0));
    }

    //Problem 5.4b)  
    // display name or shortName to DOM as new child of cell
    function renderTextFn(cell) {
        var span = document.createElement('span');
        span.innerHTML += this.name();
        cell.appendChild(span);
        span.className = this.color();
    }

    // display an image of the card as a new child of cell
    //draw item (as image) in container...
    // path: images/SVG-cards-1.3/ace_of_spades.svg
        //document.body.appendChild(img);


    function renderImageFn(cell) {
     //   var img = document.createElement('img');
        var img = document.body.appendChild('img');

        cell.appendChild('img');
        img.src = ('images/SVG-cards-1.3/ace_of_spades.svg');
        img.className = ('cardImage');
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