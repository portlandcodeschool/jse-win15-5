// Homework #5.2
// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = (function () {

	function makeDeque(values) {
		// These vars are private, local to scope of makeDeque,
		// only accessible to functions defined in makeDeque:
		var array = values.slice(); //copy values
		var absent = []; //list of missing elements

		// Each function below is specific to one deque, with access to the private vars

		// ---- Internal use only ----
		function readmit(val) {
			var cardAt = absent.indexOf(val); // indexOf is -1, val does not exist
		    if (cardAt < 0)
		        return false;
		    absent.splice(cardAt, 1); // start at cardAt, deleteCount = 1 (remove one element)
		        return true;
		}

		// ---- Public instance methods: -----

		function arrLength() { // get current length, not change it
		    return array.length;
		}    

		function top() {
			var val = array.length-1;
		    return array.length > 0 ? array[val] : undefined;
		}

		function bottom() {
			return array[0];
		}

	    function pop() {
			var val = array.pop();
			if (val !== undefined)
				absent.push(val);
			return val;
	    }

	    function push(val) {
		    return readmit(val) && 
		        array.push(val);
		}

	    function shift() {
			var val = array.shift();
			if (val !== undefined)
				absent.push(val);
			return val;
	    }

	    function unshift(val) {
		    return readmit(val) && 
		        array.unshift(val);
	    }
		
		function cut() {
			var arrLength = array.length;
	        var splitLength = Math.ceil(arrLength/2);
	        if (splitLength == arrLength)
	    	    return 0;
			var lastHalf = array.splice(splitLength, arrLength);
			array = lastHalf.concat(array);
			    return lastHalf.length;
		}

		function map(convertValFn) {
		    return array.map(convertValFn);
	    }

		function sort(compareValsFn) {
		    return array.sort(compareValsFn);
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

	    function render(container, renderItemFn) {
	    	// clear contents of container
	    	container.innerHTML = '';
	    	// for each item in deque use map or for loop
	    	// create a cell
	    	for (var i = 0; i < this.array.length; ++i) {
	    	     var div = document.createElement('div');
	    	     div.className = 'dequeItem';
		    	 container.appendChild(div); // Type error - appendChild is not a function
		    	 renderItemFn(this.array[i], div);
		    }
		    // var elem = getElementById('card-names');
	    	// elem.innerHTML += "<div>new element</div>";
		}

		return { //one deque instance...
				array: array,
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
				shuffle: shuffle,
				render: render
		};

	} //end makeDeque

    return makeDeque;
  
}());  
    
// Part b): Turn this file into an IIFE module!
// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeDeque;