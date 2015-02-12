
var deckOfCards = makeDeque(makeCard.fullSet);
deckOfCards.shuffle();//keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];
var deckOfPeople = makeDeque(people);

//function contents stolen from solutions/tuesday night homework lecture
function renderCardText(item,container) {
	//draw item (as text) in container...
	item.renderText(container);
}

function renderCardImage(item,container) {
	//draw item (as image) in container...
	item.renderImage(container);
}

function renderStr(string,container) {
	// You could write a new function here,
	//  or somehow reuse renderCardText()
	container.innerHTML += (string + ' ');
}

function drawStuff() {
	deckOfCards.render('card-names', renderCardText);
	deckOfCards.render('card-images', renderCardImage);
	deckOfPeople.render('people-names', renderName);
}


//wait until everything is loaded before rendering:
window.onload = drawStuff;
