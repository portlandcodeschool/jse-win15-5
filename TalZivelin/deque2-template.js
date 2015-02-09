// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

var makeDeque = // receive factory with external name `makeCard`
    (function () { //begin IIFE...


function makeDeque(values) {
	
	
	/*var closure = {
        // personal method
        values: function() {
            return _values;
        }
    };
    return closure;*/
	
	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements
	

	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
		var foundAt = this.absent.indexOf(val);
		if (foundAt < 0) // -1 if not found
				return false;
		// else found; excise from absent array
		this.absent.splice(foundAt,1);
		return true;
	}

	// ---- Public instance methods: -----
	
	function arrLength() { 	
		return this.arr.length;
	}

	function top() {
		return this.arr[this.arr.length-1];
	}

	function bottom() {
		return this.arr[0]; 
	}
	
	function pop() {
		return this.arr.pop();
	}
	
	 function push(val) {
		return this.arr.push()
	}
	
	function shift() {
		return this.arr.shift()
	}
	
	function unshift() {
		return this.arr.unshift()
	}
	
	function cut() {
		var middle = Math.floor(this.arr.length/2);
		var firstHalf= [],
			secondHalf = [];
	
		for (var i = 0; i < this.arr.length; i++) {
			if (i <= middle - 1) {
				firstHalf[i] = this.arr[i];
			} else {
				secondHalf.push(this.arr[i]);
			}
			
		}
		
		this.arr = secondHalf.concat(firstHalf);
		return this.arr;
	}
	
	function sort(compareValsFn) {
		return this.arr.sort(compareValsFn)
	}
	
	function map(convertValFn) {
		return this.arr.map(convertValFn)
	}

	// etc...


	return { //one deque instance...
			arr: values.slice(),
			length  :  arrLength,	
			top : top,
			bottom : bottom,
			push    : push,
			pop     : pop,
			shift   : shift,
			unshift : unshift,
			sort    : sort,
			cut     : cut,
			map     : map
	};

} //end makeDeque

    return makeDeque;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!
	
// Part b): Turn this file into an IIFE module!

console.log("This function is an IIFE that can be run by calling makeDeque")
