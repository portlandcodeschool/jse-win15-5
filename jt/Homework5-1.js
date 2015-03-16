/*
1) Card module [20%]

Package your earlier playing-card code into a module; that is, wrapped inside an immediately-
invoked function expression (IIFE, or "Iffy"). Your module should return one object: the factory
makeCard. As before, calling makeCard(id) should create and return a card object with methods 
for rank, suit, name, etc. But this time, the shared methods don't need to be linked initially
to the factory; they can just be ordinary functions within the IIFE, where they are protected
from the global scope.

The instance methods still need to be linked to each instance, and the factory methods (e.g. 
isCard()) still needs to be linked the factory. But any other helper-functions or arrays which
do not need to be public should remain inaccessible from outside the IIFE.
*/

//initiation of deck array (carried over from homework 2? 3?)

var Order = {Ace: 0, 2:4, 3:8, 4:12, 5:16, 6:20, 7:24, 8:28, 9:32, 10:36, Jack:40, Queen:44, King:48}
var Suit = {Hearts:1, Diamonds:2, Spades:3, Clubs:4};
         
    var name;
    var score;
    var pDeck = [];
    var Deck = [];

var createDeck = function() {

    count = 0;
    for(var i in Order) {     //loop through Order object
    name = i;                 //add Order names to name var 
    score = Order[i];         //add Order scores to score var
     for(var b in Suit) {     //take each Order property and loop through the Suits 
        
         name2 = name;         //set new variable for initial name/ re-set when loop returns
        name2 += " of " + b;  //add Suit name to name2 var
        score2 = score;      //set new variable for initial score/re-set when loop returns
        score2+= Suit[b];    //add Suit score to score2 var
         
         pDeck[count]= name2;  //add score2 to the Deck properties - the Deck will be undefined w/out
                               //this (why???)
         count++;
    }
    }
    //The Array puts the Aces in indexes 36-39, so the following moves them to indexes 0-4
    var c = pDeck.slice(36,40);           //cuts out the Aces & stores in variable 'c'
    var rDeck= pDeck.slice(0,36).concat(pDeck.slice(40)); //takes the deck, 1. cuts out the 
                                                          //indexes before the aces, 2. cuts 
                                                          //out the indexes after the aces & 
                                                          //3. concats them into an ace-less 
                                                          //deck.
    Deck = c.concat(rDeck);               //adds the aces to the modified deck
    
    return Deck;           //returns Deck object/array
}

var newDeck = createDeck();  //creats a new deck/runs the above - only needs to be done once



//Homework 5 begins here -create IIFE around the existing makeCard factory
(function() {
var makeCard = function (id) {
   
    if (!(Number.isInteger(id)))
        return null;
  //else 
  
  var card = {
    /*  ?? not understanding line 6 of problem 4 framework - does he mean to do the below - commented out
    line?
    id: [rank(id), rankSuit(id), color(id), nameCard(id)]
    */
    rank: rank(id),
    rankSuit: rankSuit(id),
    color: color(id),
    nameCard: nameCard(id),  
    //cardID: cardID(id) //this is for my version only 
    };


var y;
  
    function rank (){
       if (id===0);
           return 1;
        y = Math.ceil(id/4);
        return y;
        };

    function rankSuit (){
      id=Number(id);
        y= id+1;
        if (y<5)
            return y;
        else if (y %4===0)
            return 4;
        return y %4;       
    };

    function color () {
        shade = rankSuit(id);  //callback to previous function
        if (shade <3) {
            return "red";
        };
        return "black";
    };

    function nameCard () {
        //g = createDeck();      // no need to include if already created
        name = Deck[id];         //get "read only" warning??? on JS Hint
        return name;
        };
 return card;
}   

 /* 
this section of exercise 4 is still being worked on -
//4.1.b here - not sure if this is correct -
// b) Write another method which is attached to and called through the factory alone, not the
//instances:  makeCard.isCard(obj) should return true if obj is a valid card object 
//(a product of the factory) and false otherwise.

var isCard = function (obj) {  //makeCard.isCard = function (obj) is not being accepted??
   var testArr = Object.keys(obj);
   var knownArr = Object.keys(makeCard(0));
   
   //if (testArr.sort() !== knownArr.sort())
     //return false;
     
   //for (b in obj){
    for (var i=0; i<53; i++){
     if (makeCard(i) ==obj)        
     //    if (obj[b] !== makeCard[b])
           return true;
        }
        //return false;
   }
   */
 
 var fullSet = function() { //makeCard.fullSEt = function () is not being accepted??
   var arrFullSet = []; 
 
   for (var i=0; i<53; i++){
     arrFullSet[i] = makeCard(i); 
 }
   return arrFullSet;
 }

})()  //close IIFE


 