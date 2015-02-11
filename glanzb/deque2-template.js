

// Part b): Turn this file into an IIFE module!


var makeDeque = 

(function (){
    function makeDeque(values) {

	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements

	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) { //internal function only, do not attach to instances; 
	// returns true if val was absent
		var foundAt = absent.indexOf(val);
		if (foundAt<0) return false; //foundAt is -1 if val not found
		// else found; excise from absent array
		absent.splice(foundAt,1);
		return true;
	}

	// ---- Public instance methods: -----

	function top() {
			if (array.length)
				return array[array.length-1];
		}

	function bottom() {
		if (array.length)
			return array[0];
	}

	function pop() {
		var val = array.pop();
		if (val !== undefined)
			absent.push(val);
		return val;
	}

	function push(val) {
		return readmit(val) && array.push(val);
	}

	function shift() {
		var val = array.shift();
		if (val !== undefined)
			absent.push(val);
		return val;
	}

	function unshift(val) {
		return readmit(val) && array.unshift(val);
	}

	function sort(sortFn) {
		//don't return:
		array.sort(sortFn);
	}
	function map(convertFn) {
		return array.slice().map(convertFn);
	}

	// Dan's solution
	function cut() { //returns # elements moved from upper half to lower (0 if no change)
		var fullLength = array.length;
		var headLength = Math.ceil(fullLength / 2);
		if (headLength == fullLength) // no tail, nothing to swap
			return 0;
		var tail = array.splice(headLength, fullLength); // removes tail from array
		array = tail.concat(array); // swap tail and remaining head
		return tail.length; 
	}

	function shuffle() {
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
 	}

 	// part 4.
/* 	function renderFn(container, renderItemFn){
        //document.body.innerHTML = '';		// empty a DOM element document.body.innerHTML = ''
        if (typeof container === 'string') {
	 			container = document.getElementById(container);
	 		}
	 	for (var i = 0; i<array.length; i++) {
            var div = document.createElement('div');
            div.className = 'dequeItem';
            renderItemFn(array[i],div); // everything stored in the array at the certain position goes in the new divs
            container.appendChild(div);
        };
    }

//false_of_spades2.svg haha
*/

console.log("card image names are not right, getting false_of_spades2.svg etc")

function renderFn(container,renderItemFn) {
	 		if (typeof container === 'string') {
	 			container = document.getElementById(container);
	 		}
	 		if (!(container instanceof HTMLElement)) {
	 			console.log('no such element');
	 			return;
	 		}
	 		for (var i=0; i<array.length; ++i) {
	 			var cell = document.createElement('div');
	 			cell.className = 'dequeItem';
	 			renderItemFn(array[i], cell);
	 			container.appendChild(cell);
	 		}
	 	}

	var deque = { //one deque instance...
			top : top,
			bottom : bottom,
			sort : sort,
			map : map,
			cut : cut,
			shuffle : shuffle,
			push : push,
			pop : pop,
			shift : shift,
			unshift : unshift,

			render : renderFn
	};
	return deque;
			//etc
	};

	// 
return makeDeque;
})(); 

if (typeof module !== "undefined") {
    module.exports = makeDeque;
}

    





