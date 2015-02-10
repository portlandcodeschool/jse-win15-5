
var deckOfCards = makeDeque(makeCard.fullSet);
deckOfCards.shuffle();//keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];
var deckOfPeople = makeDeque(people);




// function renderCardImage(item,container) {
// 	//draw item (as image) in container...
// }

// function renderStr(string,container) {
// 	// You could write a new function here,
// 	//  or somehow reuse renderCardText()
// }



// //wait until everything is loaded before rendering:


// window.onload = drawStuff;
