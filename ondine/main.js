var deckOfCards = makeDeque(makeCard.fullSet);
deckOfCards.shuffle(); //keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];

var deckOfPeople = makeDeque(people);

function renderCardText(item,container) { // knows item is a card
	//draw item (as text) in container...
	item.renderText(container);	
}

function renderCardImage(item,container) {
	//draw item (as image) in container...
	item.renderImage(container);
}

function renderName(string,container) {
	// You could write a new function here,
	//  or somehow reuse renderCardText()
	string.renderText(container);
}

function drawStuff() {
	deckOfCards.render(document.body, renderCardText);
	deckOfCards.render('card-names', renderCardText);
//	deckOfCards.render(document.body, renderCardImage);
	deckOfCards.render('card-images', renderCardImage);
	deckOfPeople.render('people-names', renderName);
}


//wait until everything is loaded before rendering:
window.onload = drawStuff;



var card0 = makeCard(0);
var card2 = makeCard(2);
card0.renderText(document.body);
card2.renderText(document.body);
