function makeDeque(values) {

	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(0); //copy values
	var absent = []; //list of missing elements
  var closure = {
    values : function() {
      return values;
    }
     //end of closure
  return closure
  }
	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
		//...
	}
	
	// ---- Public instance methods: -----

	function top() {
		return array[(array.length)-1];
	}

	function bottom() {
		return array[0];
	}
	function pop() {
	  	return array.pop();
	}

	function push(val) {
	  	return array.push(val);
	}

	function shift() {
		this.array.shift()
	  	return this.array.length;
	}

	function unshift(val) {
		return this.array.shift(val);
	}

	function cut() {
	    var mid = Math.ceil(this.array.length /2);
	    var test = this.array.slice(0,mid)
	    var test2 = this.array.slice(mid)
	return test2.concat(test)
	}

	function map(convertValFn) {
		return this.array.map(convertValFn);
	}

	function sort(compareValsFn) {
		return this.array.sort(compareValsFn)
	}
		
	return { //one deque instance...
			top : top,
			bottom : bottom,
			pop : pop,
			push : push,
			shift : shift,
			unshift : unshift,
			cut : cut,
			map : map,
			sort : sort
	};

} //end makeDeque

var deque0 = makeDeque(makeCard.fullSet)
deque0.bottom()


//2b

var makeDeque = (function() {
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

	function top() {
		return array[(array.length)-1];
	}

	function bottom() {
		return array[0];
	}
	function pop() {
	  	return array.pop();
	}

	function push(val) {
	  	return array.push(val);
	}

	function shift() {
      array.shift()
	  	return this.array.length;
	}

	function unshift(val) {
		return array.shift(val);
	}

	function cut() {
	    var mid = Math.ceil(array.length /2);
	    var test = array.slice(0,mid)
	    var test2 = array.slice(mid)
	return test2.concat(test)
	}

	function map(convertValFn) {
		return array.map(convertValFn);
	}

	function sort(compareValsFn) {
		return array.sort(compareValsFn)
	}
		
	return { //one deque instance...
			top : top,
			bottom : bottom,
			pop : pop,
			push : push,
			shift : shift,
			unshift : unshift,
			cut : cut,
			map : map,
			sort : sort
	};
  }; //end makeDeque inner function
  return makeDeque;
})(); //end makeDeque



var deque0 = makeDeque(makeCard.fullSet);
deque0.bottom();


