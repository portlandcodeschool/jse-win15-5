// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = 
	(function () { //begin IIFE

	function makeDeque(values) {
		var closure = {
			values: function() {
				return values;
				}
				
		}
		return closure;
	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements


	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
		//...
	}

	// ---- Public instance methods: -----

	function top() {
		var top = this.array[this.array.length-1];
		return top;
	}

	function bottom() {
		var bottom = this.array[0];
		return bottom;
	}

	function pop() {
		var pop = this.array.pop();
		return pop;
	}

	function push() {
		var push = this.array.push(val);
		return push;
	}

	function shift() {
		var shift = this.array.shift();
		return shift;
	}

	function unshfit() {
		var unshift = this.array.unshift(val);
		return unshift;
	}

	function length() {
		var length = this['array'].length;
		return length;
	}

	function cut() {
		//take the first half of the array
		var midpoint = (Math.ceil(this.array.length / 2));
		var firsthalf = this.array.slice(0, midpoint);  
		var secondhalf = this.array.slice(midpoint, this.array.length);
		this.array = secondhalf.concat(firsthalf);
		}

	function sort() {
		this.array.sort(compareValsFn);
		return this.array;
		}

	function map() {
		var convertedDeck = [];
		for(var i = 0; i < this.array.length; i++) {
		convertedDeck.push(convertValFn(this.array[i]));
		}
		return convertedDeck;
		}

	function compareValsFn(a, b) {
	return (a > b) ? 1 : -1;
	}

	function convertValFn(val) {
	return val + 2;
	}

	return { //one deque instance...
			top : top,
			bottom : bottom,
			pop : pop,
			push : push,
			shift : shift,
			unshift : unshift,
			length : length,
			

			//etc
	};

} //end makeDeque
})(); //end IIFE
// Part b): Turn this file into an IIFE module!
