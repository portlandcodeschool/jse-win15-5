var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...



    // The factory itself:
    function makeCard(id) {  
            if (!makeCard.isValidID(id)) // abort if id is invalid
       return null;
            return card = {
            id   : id,
            rank : rank,
            suit : suit,
            color: color,
            name : cardName,
            shortName : shortName,
            renderText : renderText,
            renderImage : renderImage,
      };

}
//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:
makeCard.isValidID = function(num) { // Returns--> true, false
        return ((typeof num)==="number") //correct type
                && (num%1 === 0)        //integer
                && num>=0 && num<=51;   //in range
}





makeCard.rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Jack','Queen','King'];

makeCard.suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

makeCard.rankShortNames = ['','A','2' ,'3','4','5','6','7','8','9','10',
                        'J','Q','K'];

makeCard.suitShortNames = ['','H','D','S','C'];

//-----------------------
// Instance Methods:
//-----------------------

function renderImage(cell){
        var img = document.createElement('img')
        img.src = 'images/SVG-cards-1.3/'+makeCard.rankNames[this.rank()].toLowerCase()+'_of_'+makeCard.suitNames[this.suit()].toLowerCase()+'.svg';
        cell.appendChild(img);
}

function renderText(cell){
        var cardTitleSpan = document.createElement('span');
        cardTitleSpan.id = 'card';
        cardTitleSpan.innerHTML = this.shortName().fontcolor(this.color());
        cell.appendChild(cardTitleSpan);
}

    function rank() {
          return Math.floor(this.id/4)+1;
    }

    function suit() {
        return (this.id%4)+1;
    }

    function color() {
        var suit=this.suit();
        return suit && ((suit<3)? "red": "black");        
    }

    function cardName() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (makeCard.rankNames[rank]+' of '+makeCard.suitNames[suit]);
    }

        function shortName() {
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (makeCard.rankShortNames[rank]+makeCard.suitShortNames[suit]);
    }

    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
            return thing
            && (typeof thing === 'object') // check for null or primitive
            && (thing.name === makeCard.cardName) // check at least one method
            && ('id' in thing) && makeCard.isValidID(thing.id); //check id
    };

    makeCard.fullSet = [];//<-- fill me
    for (var id=0; id<52; ++id) {
    makeCard.fullSet.push(makeCard(id));
    }


    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

var card1 = makeCard(1);
var card23 = makeCard(23);
var card45 = makeCard(45);
var carda = makeCard("a");

var deck1 = makeCard.fullSet;

// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeCard;


//-----Deque-----//

// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = (function(){
function makeDeque(values) {

    // These vars are private, local to scope of makeDeque,
    //  only accessible to functions defined in makeDeque:
    var array = values.slice(0, values.length); //copy values
    var absent = []; //list of missing elements


    // Each function below is specific to one deque, with access to the private vars

    // ---- Internal use only ----
    function readmit(val) { // returns true if val was absent
    var foundAt = absent.indexOf(val);
    if (foundAt < 0) // -1 if not found
            return false;
    // else found; excise from absent array
    absent.splice(foundAt,1);
    return true;

        //...
    }

    // ---- Public instance methods: -----

    function arrLength(){
        return array.length;
    }

    function push(){
    return this.readmit(val) && //part e)
        array.push(val);
}

    function pop(){
    var val = array.pop();
    if (val !== undefined)
        absent.push(val);  //part e)
    return val;
}

    function shift(){
    var val = array.shift();
    if (val !== undefined)
        absent.push(val); //part e)
    return val;
}

    function unshift(){
    return this.readmit(val) && //part e)
        array.unshift(val);
}

    function sort(compareValsFn){
    return array.sort(compareValsFn);
}

    function map(convertValFn){
    return array.map(convertValFn);
}

    function top() {
    return array[array.length-1]; 
    }

    function bottom() {
    return array[0];
    }

    function cut() {
    var fullLength = array.length;
    var headLength = Math.ceil(fullLength / 2);
    if (headLength == fullLength) // no tail, nothing to swap
        return 0;
    var tail = array.splice(headLength, fullLength); // removes tail from array
    array = tail.concat(array); // swap tail and remaining head
    return tail.length;  //returns # elements moved from upper half to lower (0 if no change)
    }

    function shuffle(){
    // Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
    var end = array.length, temp, i;

    // While there remain elements to shuffle…
    while (end>1) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * end--);

        // And swap it with the current element.
        temp = array[end];
        array[end] = array[i];
        array[i] = temp;
    } 
    // always successful; no return val needed
} 

    // etc...


    return { //one deque instance...
            top : top,
            bottom : bottom,
            cut: cut,
            length: arrLength,
            push: push,
            pop: pop,
            shift: shift,
            unshift: unshift,
            sort: sort,
            cut: cut,
            map: cut,
            shuffle: shuffle,
            readmit: readmit,
            //etc
    };
}
    return makeDeque;

})(); //end makeDeque

var tango = makeDeque(makeCard.fullSet);
// Part b): Turn this file into an IIFE module!

//Question 3: User Registration:

var makeUser = (function() {// begin IIFE...
    
    var sharedLog = [];  //private; accessible only from functions defined within IIFE


    // The factory itself:
    function makeUser(name,passwd) {
        // Return a user object with three methods:
        return user = {

        // getName()
            getName: function() {
                return name;
            },
       // validate(str)
            validate: function(str){
                if (str === passwd){
                    return "Accepted"
                } else {
                    return "Wrong. You have 5 seconds before detonation."
                }
            },
        // record(message) (Part b)
            record: function(message){
                if (!message){
                    return undefined;
                } else {
               sharedLog.push(name +":"+ message);
                return true;
            }
        }
    

    // Part b) only:
   // Factory method (defined within IIFE, so can access sharedLog):

    }}

    //maybe throw a sort in here? maybe a map? find a way to search partial array
    //better than indexOf -- though maybe that will work?
    
           makeUser.getLog = function(user) {
            var userLog = [];
    if (!user) {
        return function(){
            for (i = 0; i < sharedLog.length; i++)
                userLog.push(sharedLog[i]);
                return userLog;
        } } else {
            //for every instance of edge pull their message
            for (i = 0; i < sharedLog.length; i++)
                userLog.push(sharedLog[sharedLog.indexOf(user, 0)]);
                return userLog;
            //
        }
    }()

    return makeUser;
})();

var maxwell = makeUser("edge", "generic");
maxwell.getName();
maxwell.validate("burgers");
maxwell.validate("generic");
var kittens = makeUser("cleo", "hollywood");
kittens.getName();
kittens.validate("hollywood");
maxwell.getName();
maxwell.record("Mayday");
kittens.record("oh come on");
maxwell.record("failed this");
kittens.record("just once more")   

if (typeof module != 'undefined')
    module.exports = makeUser;
//test (!xxxxx)------ (works)
function bark(fido){
    if (!fido){
        console.log("nothin here")
        } else {
            console.log("bark!")
        }
    }


//Question 4 - Showing off the Deque

