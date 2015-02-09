var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        if (!(isValidID(id))) { 
            return null; 
        } else {
            var instance = {
                id: id,
                rank: rank,
                suit: suit,
                color: color,
                cardName: cardName,
                shortName: shortName,
                renderText: renderText,
                renderImage: renderImage
            }
            return instance;
        }
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:
    var suites = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
    var ranks = ["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
    function isInt(n) { return ((n%1 === 0) && (typeof n === 'number')); }
    function inRange(n,a,z) { return ((n >= a) && (n <= z));}
    function isValidID(num) {
        if (!((inRange(num,0,51)) && (isInt(num)))) { return false; } else { return true; }
    }

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
        return Math.floor(this.id / 4) + 1;
    }

    function suit() {
        return (this.id % 4) + 1;
    }

    function color() { // -->"red,"black",NaN
        var b = Math.floor(((this.id / 2) % 2));
        return b?'black':'red';
    }

    function cardName() { //--> string, NaN
        return ranks[this.rank(this.id)] + ' of ' + suites[this.suit(this.id)];
    }

    //-----------------
    //  4a
    //-----------------
    function shortName() {
        var a = ((this.rank() == 1) || (inRange(this.rank(),11,13)))?ranks[this.rank()][0]:this.rank();
        var b = suites[this.suit()][0];
        return a+b;
    }
    //etc...
    //-----------------
    //  4b
    //-----------------
    function renderText(cell) {
        document.getElementById(cell).innerHTML = this.cardName() + ' - ' + this.shortName();
        document.getElementById(cell).className = this.color();
    }

    function renderImage(cell) {
        var img = document.createElement('img');
        var card_rank = (inRange(this.rank(), 2, 10))?this.rank():ranks[this.rank()];
        var card_name = card_rank + '_of_' + suites[this.suit()];
        src = 'images/SVG-cards-1.3/' + card_name.toLowerCase() + '.svg';
        img.src = src;
        document.body.appendChild(img);

    }

// makeCard.fullSet.forEach(function (x) {  
//     console.log(x.shortName() + ': ' + x.cardName()); 
// });
//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
        return thing.rank === rank;
    };

    makeCard.fullSet = [];//<-- fill me

    makeCard.createSet = function () {
         for (var i = 0; i < 52; i++) {
            makeCard.fullSet.push(makeCard(i));
        }
    }

    makeCard.createSet();

    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

card1 = makeCard(1);


// Export as node-style module:
//if (typeof module != 'undefined')
//   module.exports = makeCard;