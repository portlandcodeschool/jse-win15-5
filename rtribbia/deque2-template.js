// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = (function () {
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
			if (isDiscarded(val)) {
				absent.splice(absent.indexOf(val), 1);
				return array.push(val);
			} else {
				return null;
			}
		}

		function shift() {
			//...
			absent.push(array[0]);
			return array.shift();
		}

		function unshift (val) {
			//...
			if (isDiscarded(val)) {
				absent.splice(absent.indexOf(val), 1);
				return array.unshift(val);
			} else {
				return null;
			}
		}

		function cut() {
			//...
			var len = array.length;
			if (len < 2) { return null; }
			var mid = Math.ceil(len / 2);
			//0,2   2,4
			array = array.slice(mid, array.length).concat(array.slice(0, mid));

		}

		function map(convertValFn) {
			//...
			return array.map(function (x) { return convertValFn(x); });
		}


		function sort(compareValsFn){
			array.sort(compareValsFn);
		}

		function shuffle() {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return this.values;	
		}
		function isDiscarded(val) {
			return (absent.indexOf(val) == -1)?(false):(true);
		}

		function printArray() {
			array.forEach(function (x) {console.log(x);});
		}

		function deck() {

			return array;
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
				print: printArray,
				deck:deck

				//etc
		};

	} //end makeDeque
	return makeDeque;
})();

var deque1 = makeDeque('bob sam erin jeff hazel beth goran smokey george'.split(' '));
var deque2 = makeDeque('abcdefghijklmnopqrstuvwxyz'.split(''));


// Part b): Turn this file into an IIFE module!
