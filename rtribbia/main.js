
var deckOfCards = makeDeque(makeCard.fullSet);
deckOfCards.shuffle();//keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];
var deckOfPeople = makeDeque(people);
function inRange(n,a,z) { return ((n >= a) && (n <= z));}




function renderCardText(item,container) {
	container.innerHTML = item.cardName() + ' - ' + item.shortName();
    container.className = item.color();
}



function renderCardImage(item,container) {
	    var suites = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
   		var ranks = ["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
  
	    var img = document.createElement('img');
        var card_rank = (inRange(item.rank(), 2, 10))?item.rank():ranks[item.rank()];
        var card_name = card_rank + '_of_' + suites[item.suit()];
        src = 'images/SVG-cards-1.3/' + card_name.toLowerCase() + '.svg';
        img.src = src;
        container.appendChild(img);
}



function renderName(string,container) {
	container.innerHTML = '<p>' + string + '</p>';
}

function drawStuff() {
	deckOfCards.render('card-names', renderCardText);
 	deckOfCards.render('card-images', renderCardImage);
 	deckOfPeople.render('people-names', renderName);
}



// //wait until everything is loaded before rendering:


 window.onload = drawStuff;
