// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

function makeDeque(values) {

	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	
	var array = values.slice(); //copies values array
	// var absent = []; //list of missing elements


	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	// function readmit(val) {
	// 	//...
	// }

	// ---- Public instance methods: -----

	function top() {
		return array[array.length-1]; 
	}

	function bottom() {
		return array[0]; 
	}

	function theLength() { 
		return array.length;
	}

	function cut() {
		var arrLength = array.length;
		//round down for split
		middle = Math.floor(arrLength / 2);
		//split at that point, make two new arrays
		var rightHalf = array.splice(middle, arrLength);
		var leftHalf = array;
		//swap the two new arrays
		array = rightHalf.concat(leftHalf);
		//rejoin them?
		return array;
	}
	
	function pop() {
		return array.pop();
	}

	function push(val) {
		return array.push(val);
	}

	function shift() {
		return array.shift();
	}

	function unshift(val) {
		return array.unshift(val);
	}

	function sort(compareValsFn) {
		sortedArray = array.sort(compareValsFn);
		return sortedArray;
	}

	function map(compareValsFn) {
		return array.map(convertValFn);
	}

	function shuffle() {
		var toShuffle = array;
		var m = toShuffle.length, t, i;

	  	// While there remain elements to shuffle…
	  	while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = toShuffle[m];
	    toShuffle[m] = toShuffle[i];
	    toShuffle[i] = t;
 		}
	return toShuffle;
	}

	return { //one deque instance...
			top : top,
			bottom : bottom,
			cut : cut,
			shift : shift,
			unshift : unshift,
			shuffle : shuffle,
			pop : pop,
			push : push,
			length :theLength,
			sort : sort,
			map : map,
	};

} //end makeDeque


// Part b): Turn this file into an IIFE module!
