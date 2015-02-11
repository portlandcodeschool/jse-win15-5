// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

function makeDeque(values) {
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements
	var	length  : makeDeque.arrLength,
		top     : makeDeque.top,
		bottom  : makeDeque.bottom,
		push    : makeDeque.push,
		pop     : makeDeque.pop,
		shift   : makeDeque.shift,
		unshift : makeDeque.unshift,
		sort    : makeDeque.sort,
		cut     : makeDeque.cut,
		map     : makeDeque.map,
		//---- part d) only:----
		shuffle : makeDeque.shuffle,
		//---- part e) only:---
		readmit : makeDeque.readmit;

	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) { //internal function only, do not attach to instances
		var foundAt = absent.indexOf(val);
		if (foundAt<0) return false; //foundAt is -1 if val not found
		// else found; excise from absent array
		absent.splice(foundAt,1);
		return true;
	}
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

	return { //one deque instance...
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

			render : render
		};
		return deque;
			//etc
	};
	// 
} //end makeDeque
