var cardNames = document.getElementById('card-names');
var cardImages = document.getElementById('card-images');
var peopleNames = document.getElementById('people-names');



var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        var instance = {};
        instance.id = id;
        // set instance properties here
        instance.rank = rank;
        instance.suit = suit;
        instance.color = color;
        instance.name = cardName;   
        instance.renderText = renderText;
        instance.renderImage = renderImage;
        // and return instance...
        return instance;
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    //var rankNames = [...];

    var suitName = [1, 2, 3, 4];
    var suitTitle = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var imageName = ["ace_of_", "2_of_", "3_of_", "4_of_", "5_of_", "6_of_", "7_of_", "8_of_", "9_of_", "10_of_", "jack_of_", "queen_of_", "king_of_"];

//-----------------------
// Instance Methods:
//-----------------------


    function rank() {
        id = this.id;
        if (!(Number.isInteger(id)) || id > 51 || id < 0) {
        return NaN;
        }
        cardRank = Math.floor(this.id/4) + 1;
        return cardRank;
    }

    function suit() {
        id = this.id;
        if (!(Number.isInteger(id)) || id > 51 || id < 0) {
        return NaN;
        }
        suitLabel = suitName[id%4];
        return suitLabel;
    }

    function color() {
        id = this.id;
        if (!(Number.isInteger(id)) || id > 51 || id < 0) {
        return NaN;
        }
        if (this.suit(id) < 3) {
            cardColor = "red";
        } else {
            cardColor = "black";
            }
        return cardColor;        
    }    

    function cardName() {
        id = this.id;
        if (!(Number.isInteger(id)) || id > 51 || id < 0) {
        return NaN;
        }
        theCardName = suitTitle[(this.suit()) -1];
        nameOfCard= (rankName[(this.rank()) - 1] + " of " + theCardName);
        return nameOfCard;
    }

    //something like this?
    function renderText(cell) {
        var location = cell;
        location.innerHTML += "<div class='name'><p class=" + this.color() + ">" + this.name() + "</p></div>";
    }

    //something like this?
    function renderImage(cell) {
        var location = cell;
        var imageSuit = suitTitle[(this.suit()) -1].toLowerCase();
        location.innerHTML += "<div class='card'><img src='images/svg-cards-1.3/" + imageName[(this.rank()) - 1] + imageSuit + ".svg'></div>";
    }

//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {

    };

    makeCard.fullSet = [];//<-- fill me  

    makeCard.makeFullSet = function() {
        for (i = 0; i < 52; i++) {
            makeCard.fullSet.push(makeCard(i));
        }
        return makeCard.fullSet;
    };

    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;




///////////////   EXAMPLES   //////////////

/*
cardImages.innerHTML += "<div class='card'><img src='images/svg-cards-1.3/" + "3_of_clubs" +".svg'></div>";

cardNames.innerHTML += "<div class='name'><p class=" + "'black'" + ">" + "Three of Clubs" + "</p></div>";

cardImages.innerHTML += "<div class='card'><img src='images/svg-cards-1.3/" + "ace_of_hearts" +".svg'></div>";

cardNames.innerHTML += "<div class='name'><p class=" + "'red'" + ">" + "Ace of Hearts" + "</p></div>";

cardImages.innerHTML += "<div class='card'><img src='images/svg-cards-1.3/" + "3_of_clubs" +".svg'></div>";

cardNames.innerHTML += "<div class='name'><p class=" + "'black'" + ">" + "Three of Clubs" + "</p></div>";

cardImages.innerHTML += "<div class='card'><img src='images/svg-cards-1.3/" + "ace_of_hearts" +".svg'></div>";

cardNames.innerHTML += "<div class='name'><p class=" + "'red'" + ">" + "Ace of Hearts" + "</p></div>";
*/


