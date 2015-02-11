var makeDeque = (function(){

	function makeDeque(values) {

		// These vars are private, local to scope of makeDeque,
		//  only accessible to functions defined in makeDeque:
		var deque = values.slice(); //copy values
		var discardPile = []; //list of missing elements


		// Each function below is specific to one deque, with access to the private vars

		// ---- Internal use only ----
		function readmit(val) {
			for(var i = 0; i<deque.length; i++){
				if(deque[i] === val){
					console.log('that item is already in the deck')
					return false
				}
			}
			for(var i = 0; i<deque.length; i++){
				if(discardPile[i] === val){
					return true
				}
			}
			console.log('that item was not part of the original deck')
			return false
		}

		function addToDiscardPile(item){
			discardPile[discardPile.length] = item;
			return
		}

		// ---- Public instance methods: -----
		function viewDiscards(){
			return discardPile;
		}

		function size(){
			return deque.length;
		}

		function top() {
			return deque[size()-1];
		}

		function bottom() {
			return deque[0];
		}

		function popper() {
			addToDiscardPile(top());
			return deque.pop();
		}

		function pusher(item) {
			if(readmit(item)){
				return deque.push(item);
			}
		}

		function shifter() {
			addToDiscardPile(bottom());
			return deque.shift();
		}

		function unshifter(item) {
			if(readmit(item)){
				return deque.unshift(item);
			}
		}

		function cut() {
			var halfDeque = Math.ceil(deque.length/2);
			var tempArray = deque.slice(halfDeque);
			for(var i = 0; i < halfDeque; i++){
				tempArray.push(deque[i]);
			}
			deque = tempArray.slice();
			return;
		}

		function mapper(convertValFn) {
			return deque.map(convertValFn);
		}

		function sorter(compareValsFn) {
			return deque.sort(compareValsFn);
		}

		// etc...
		

		function shuffleFast(){//adapted from Mike Bostock's Fisher-Yates implementation
			for(var i = deque.length-1; i > 0; i--){
				var randElement = Math.floor(Math.random() * i);
				var hold = deque[i];
				deque[i] = deque[randElement];
				deque[randElement] = hold;
			}
				return;
		}


		//take in a DOM element, render deque items as child elements according to callback function
		function render(containerId, renderItemFn){
			var container = document.getElementById(containerId);
			while (container.firstChild){ //remove everything in container
				container.removeChild(container.firstChild);
			}

			for(var i = 0; i < deque.length; i++){
				var newCell = document.createElement('div'); //make an element
				newCell.classList.add('dequeItem'); //give it properties
				//newCell.classList.add('row');      
				container.appendChild(newCell); //place it as a child of container
				renderItemFn(deque[i], newCell); // render via the callback
			}


		}

		return { //one deque instance...
			    size:    size,
				top: 	 top,
				bottom:  bottom,
				pop:     popper,
				push:    pusher,
				shift:   shifter,
				unshift: unshifter,
				cut:     cut,
				map:     mapper,
				sort:    sorter,
				shuffle: shuffleFast,
				render: render,
				viewDiscards: viewDiscards,
			}

				
	} //end makeDeque

	return makeDeque;
})();

// Part b): Turn this file into an IIFE module!
