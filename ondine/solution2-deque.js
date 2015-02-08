// Homework #5.2
// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

function makeDeque(values) {

	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements


	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
		var cardAt = this.absent.indexOf(val); // indexOf is -1, val does not exist
	    if (cardAt < 0)
	        return false;
	    this.absent.splice(cardAt, 1); // start at cardAt, deleteCount = 1 (remove one element)
	        return true;
	}

	// ---- Public instance methods: -----

	function arrLength() { // get current length, not change it
	    return this.array.length;
	}    

	function top() {
		var val = this.array.length-1;
	    return this.array.length > 0 ? this.array[val] : undefined;
	}

	function bottom() {
		return this.array[0];
	}

    function pop() {
		var val = this.array.pop();
		if (val !== undefined)
			this.absent.push(val);
		return val;
    }

    function push(val) {
	    return this.readmit(val) && 
	        this.array.push(val);
	}

    function shift() {
		var val = this.array.shift();
		if (val !== undefined)
			this.absent.push(val);
		return val;
    }

    function unshift(val) {
	    return this.submit(val) && 
	        this.array.unshift(val);
    }
	
	function cut() {
		var arrLength = this.array.length;
        var splitLength = Math.ceil(arrLength/2);
        if (splitLength == arrLength)
    	    return 0;
		var lastHalf = this.array.splice(splitLength, arrLength);
		this.array = lastHalf.concat(this.array);
		    return lastHalf.length;
	}

	function map(convertValFn) {
	    return this.array.map(convertValFn);
    }

	function sort(compareValsFn) {
	    return this.array.sort(compareValsFn);
    }

    function shuffle() {
    	var end = array.length, temp, i;
		// While there remain elements to shuffle…
		while (end > 1) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * end--);

		    // And swap it with the current element.
		    temp = array[end];
		    array[end] = array[i];
		    array[i] = temp;
		}
    }

	return { //one deque instance...
		    length: arrLength,
			top: top,
			bottom: bottom,
			pop: pop,
			push: push,
			shift: shift,
			unshift: unshift,
			cut: cut,
			map: map,
			sort: sort,
			shuffle: shuffle
	};

} //end makeDeque


// Part b): Turn this file into an IIFE module!
