// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

var makeDeque = (function() {

	function makeDeque(values) {

		// These vars are private, local to scope of makeDeque,
		//  only accessible to functions defined in makeDeque:
		var array = values.slice(); //copy values
		var absent = []; //list of missing elements


		// Each function below is specific to one deque, with access to the private vars

		// ---- Internal use only ----
		function readmit(val) {
			return ((absent.indexOf(val) > -1)? true:false);
		}

		// ---- Public instance methods: -----

		function top() {
			return array[array.length - 1];
		}

		function bottom() {
			return array[0];
		}

		function myLength() {
			return array.length;
		}

		function pop() {
			var popCard = array.pop();
			absent.push(popCard);

			return popCard;
		}

		function push(val) {
			var index = absent.indexOf(val);

			if (this.readmit(val)) {
				absent.splice(index,1);
				return array.push(val);
			} else {
				return null;
			}
		}

		function shift() {
			var shiftCard = array.shift();
			absent.push(shiftCard);

			return shiftCard;
		}

		function unshift(val) {
			var index = absent.indexOf(val);

			if (index > -1) {
				absent.splice(index,1);
				return array.unshift(val);
			} else {
				return null;
			}
		}

		function cut() {
			var cutPoint = Math.ceil(array.length/2);
			var tempArrayBottom = [],
				tempArrayTop = [];

			tempArrayBottom = array.slice(0,cutPoint);
			tempArrayTop = array.slice(cutPoint, array.length);

			array = tempArrayTop.concat(tempArrayBottom);
			return array;
		}

		function map(convertValFn) {
			return array.map(convertValFn);
		}

		function sort() {
			array.sort(function(a,b) {
				return (a.id - b.id);
			});
		}

		function shuffle(shuffleFn) {
			var m = array.length, t, i;
			while (m) {
				var i = Math.floor(Math.random() * m--);

				t =  array[m];
				array[m] = array[i];
				array[i] = t;
			}
		}
		// etc...

		function check() {
			console.log("Absent: " + absent);
			console.log("Array: " + array);
		}

		function render(container, renderItemFn) {

			var elem = document.getElementById(container);
			while (elem.firstChild) {
				elem.removeChild(elem.firstChild);
			}
			if (container === 'people-names'){
				for (var i = 0; i < array.length; i++) {
					var div = document.createElement("div");
					div.setAttribute("id", container + i);
					elem.appendChild(div);
					renderItemFn(array[i], container + i);
				}
			} else {
				for (var i = 0; i < array.length; i++) {
					var div = document.createElement("div");
					div.setAttribute("id", container + array[i].id);
					elem.appendChild(div);
					renderItemFn(array[i], container);
				}
			}
		}

		return { //one deque instance...
				length: myLength,
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
				check: check,
				readmit: readmit,
				render: render,
		};
	}

	return makeDeque;
})(); //end makeDeque

var x = [1, 2, 3, 4, 5, 6, 7];
var deck = makeDeque(makeCard.fullSet);
//var deck = makeDeque(x);
// Part b): Turn this file into an IIFE module!
