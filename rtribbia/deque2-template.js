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
		//...
	}

	// ---- Public instance methods: -----

	function arrlength() {
		//...
		return array.length;
	}

	function top() {
		//...
		return array[array.length - 1];
	}

	function bottom() {
		//...
		return array[0];
	}

	function pop() {
		//...
		absent.push(array[array.length-1]);
		return array.pop();
	}

	function push(val) {
		//...
		if (this.isDiscarded(val)) {
			return this.values.push(val);
		} else {
			return null;
		}
	}

	function shift() {
		//...
		this.discarded.push(this.values[0]);
		return this.values.shift();
	}

	function unshift (val) {
		//...
		if (this.isDiscarded(val)) {
			return this.values.unshift(val);
		} else {
			return null;
		}
	}

	function cut() {
		//...
		var len = this.values.length;
		if (len < 2) { return null; }
		var mid = Math.ceil(len / 2);
		//0,2   2,4
		this.values = this.values.slice(mid, this.values.length).concat(this.values.slice(0, mid));

	}

	function map(convertValFn) {
		//...
		return this.values.map(function (x) { return convertValFn(x); });
	}


	function sort(compareValsFn){
		this.values.sort(compareValsFn);
	}

	function shuffle() {
	  var m = this.values.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = this.values[m];
	    this.values[m] = this.values[i];
	    this.values[i] = t;
	  }

	  return this.values;	
	}
	function isDiscarded(val) {
		return (this.discarded.indexOf(val) == -1)?(false):(true);
	}

	// etc...


	return { //one deque instance...
			top : top,
			bottom : bottom,
			push: push,
			pop: pop,
			shuffle: shuffle,
			sort: sort,
			map: map,
			cut: cut,
			shift: shift,
			unshift: unshift,
			arrlength: arrlength,
			isDiscarded: isDiscarded,

			//etc
	};

} //end makeDeque


// Part b): Turn this file into an IIFE module!
