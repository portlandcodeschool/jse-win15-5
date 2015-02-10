var makeCard = // receive factory with external name `makeCard`
    (function() { //begin IIFE...

    // The factory itself:
    function makeCard(id) {
        return {
            id: function(){return id},
            rank: rank,
            suit: suit,
            color: color,
            cardName: cardName,
            shortName: shortName,
            renderText: renderText,
            renderImage: renderImage,
        };
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    makeCard.isIntegerInRange = function(input, rangeMin, rangeMax){
        if(typeof(input) != 'number' || input%1 != 0){
            return false
        } else if(input < rangeMin || input > rangeMax){
            return false
        } else {
            return true
        }
    };
    //var rankNames = [...];
    var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var shortRank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    var shortSuit = ['hearts', 'diamonds', 'spades', 'clubs'];

//-----------------------
// Instance Methods:
//-----------------------

    // var ID = function(){
    //     return id;
    // }

    var rank = function() { // --> 1..13, NaN
        return Math.ceil((this.id()+1)/4);
    };


    var suit = function() { // --> 1..4, NaN
        return (this.id()%4) + 1;
    };

    var color = function() { // -->"red,"black",NaN
        if(this.suit() <= 2) {
            return 'red';
        } else {
            return 'black';
        }
    };

    var cardName = function() { //--> string, NaN
        var rankName = cardRank[this.rank() -1];
        var suitName = cardSuit[this.suit() -1];

        return rankName + ' of ' + suitName;
    };

    var shortName = function() { //--> string, NaN
        var rankName = shortRank[this.rank() -1];
        var suitName = shortSuit[this.suit() -1];

        return rankName + '_of_' + suitName
    };

    function renderText(cell){
        var cardText = document.createElement('p');
        cardText.innerHTML = this.cardName();
        cell.appendChild(cardText);
        if(this.color() === 'red'){
            cardText.className = ' red';
        } else {
            cardText.className = ' black';
        }

    }

    function renderImage(cell){
        var cardImg = document.createElement('img');
        var imgName = this.shortName()
        var cardLoc = 'images/SVG-cards-1.3/' + this.shortName() + '.svg';
        //console.log(cardLoc);
        cardImg.src = cardLoc;
        cell.appendChild(cardImg);
    }

    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

     makeCard.isCard = function(thing) { // --> true,false
        if(typeof thing != 'object') {
            return false
        }
        for(keys in thing) {
            if (! (keys in makeCard(100))){
                return false
            }
        }
        return true
    };

    makeCard.fullSet = []; 
    for(var i = 0; i < 52; i++){
        makeCard.fullSet[i] = makeCard(i);
    }



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;