  
var deckOfCards = makeDeque(makeCard.fullSet);
//deckOfCards.shuffle();//keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];
var deckOfPeople = makeDeque(people);


function renderCardText(item,container) {
	container.innerHTML += item.cardName();
}

function renderCardImage(item,container) {
	container.innerHTML = container.innerHTML + '<img src="' + 'images/' + item.shortCardName() + '">';
}

function renderStr(string,container) {
	// You could write a new function here,
	//  or somehow reuse renderCardText()
}

function drawStuff() {
	deckOfCards.render('card-names', renderCardText);
	deckOfCards.render('card-images', renderCardImage);
	deckOfPeople.render('people-names', renderName);
}


//wait until everything is loaded before rendering:
window.onload = drawStuff;

//function render(container, renderItemFunction) {
	//get id of element we are going to render in to, set it to empty
	//for each value in the makeDeque array
		//create a div, set to variable
		//set the class of the div to dequeItem
		//function. for each value of the array, x, renderItemFunction
		//insert it into the cell







