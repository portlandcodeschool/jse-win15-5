/////5.1 console logs/////
var One = makeCard(1);
console.log('5.1) \n', 'Name: ' + One.cardName(), 'color: ' + One.color(),  'IsCard(One): '+makeCard.isCard(One))

/////5.2 console logs/////
var deckOfCards = makeDeque(makeCard.fullSet);
var popped = deckOfCards.pop();
console.log('5.2) \n','var popped = deckOfCards.pop()-> ', popped) 
console.log('bad push: ', 'deckOfCards.push(5) ->', deckOfCards.push(5));
console.log('good unshift: ', 'deckOfCards.unshift(popped) -> ', deckOfCards.unshift(popped) );
console.log('deckOfCards.cut()', 'deckofCards.top().cardName() ->', deckOfCards.top().cardName() )

/////5.3 console logs/////
bob = makeUser('bob', 'amBob');
jim = makeUser('jim', 'pswrd');
jane = makeUser('jane', '12345' )
bob.record('yo');
jim.record('i am jim');
jim.record('what about me?');
jane.record('oh really?');
jane.record('ive made terrible mistakes');
jane.record('deadly consequences');

console.log('5.3)');
console.log('all users log: ', makeUser.getLog());
console.log('bob log: ', makeUser.getLog('bob'));
console.log('jim log: ', makeUser.getLog('jim'));
console.log('jane log: ', makeUser.getLog('jane'));


/////5.4 logs/////
console.log('5.4)');
console.log('proof is on the browser window?')

var deckOfCards = makeDeque(makeCard.fullSet);
deckOfCards.shuffle();//keeps it interesting

var people = [
	'Anton','Brigitta','Danniel','Eric','Greg','Ian',
	'Jahsie','James','John','Kristopher','Kyle',
	'Michael','Ondine','Peter','Robert','Tal','Todd'];
var deckOfPeople = makeDeque(people);


function renderCardText(card,container) {
	container.innerHTML = card.cardName()
	container.classList.add('row')
	if(card.color() === 'red'){
            //container.className = ' red';
            container.classList.add('red');
        } else {
            //container.className = ' black';
            container.classList.add('black');
        }
}

function renderCardImage(card,container) {
	//container.classList.add('cardImage');
	var innerImg = document.createElement('img');
	innerImg.classList.add('cardImage');
	container.appendChild(innerImg);
	var cardLoc = 'images/SVG-cards-1.3/' + card.shortName() + '.svg';
	//console.log(cardLoc);
	innerImg.src = cardLoc;
}

function renderName(string,container) {
	container.classList.add('row')
	container.innerHTML = string;
}

function drawStuff() {
	deckOfCards.render('card-names', renderCardText);
	deckOfCards.render('card-images', renderCardImage);
	deckOfPeople.render('people-names', renderName);
}


//wait until everything is loaded before rendering:
window.onload = drawStuff;
