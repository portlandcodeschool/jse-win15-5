// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

var makeDeque = // receive factory with external name `makeDeque`
    (function() { //begin IIFE...

        function makeDeque(values) {

            // These vars are private, local to scope of makeDeque,
            //  only accessible to functions defined in makeDeque:
            var deque = values.slice(); //copy values

            var popHistory = []; // track the history of popped elements (taken off the top)
            var shiftHistory = []; // track the history of shifted elements (taken off the bottom)
            var qLength = deque.length;
           

            // Each function below is specific to one deque, with access to the private vars

          
            //________________________________________________________________________ readmit
            makeDeque.readmit = function(val) {
                //...  Not clear on this one.... part of HW5 problem 2? 
                //... this is implemented via the shift and pop history buffers which are working
                //... but this function not implemented due to need to focus on HW5 problem 4
            };

            // ---- Public instance methods: -----
           
            //________________________________________________________________________ top
            makeDeque.top = function() {
                return deque[qLength - 1]; //TODO test if this returns undefined for zero length deques
            };

            //________________________________________________________________________ bottom
            makeDeque.bottom = function() {
                return deque[0];
            };
            //----------------------------------------------------- pop
            makeDeque.pop = function() {
                var temp = deque.pop();
                popHistory.unshift(temp); // store the pop history
                qLength--;
                return temp;
            };

            //________________________________________________________________________ push
            makeDeque.push = function(val) {
                if ((typeof val !== 'undefined')) //&& (val in popHistory)
                { // don't push undefined stuff
                    qLength++;
                    return deque.push(val);
                } else {
                    debugger;
                    return null;
                }
            };

            //________________________________________________________________________ shift
            makeDeque.shift = function() {
                var temp = deque.shift();
                qLength--;
                shiftHistory.push(temp); // store the shift history
                return temp;
            };

            //________________________________________________________________________ unshift
            makeDeque.unshift = function(val) {
                if (typeof val !== 'undefined') // && //&& (val in shiftHistory)
                { // don't unshift undefined stuff
                    qLength++;
                    return deque.unshift(val);
                } else {
                    debugger;
                    return null;
                }
            };

            //________________________________________________________________________ cut
            makeDeque.cut = function() {
                // flops the deque around the cut point and stores the modified copy back into deque
                if (qLength > 1) {
                    var tempList = [];
                    var cutPosition = Math.trunc(qLength / 2);
                    // strategy:
                    // FIRST put the top half of deque into bottom half of tempList
                    // SECOND put the bottom half of deque into top half of tempList
                    var j = 0;
                    for (var i = cutPosition; i < qLength; i++) { // Top Half of deque
                        tempList[j] = deque[i];
                        j++;
                    }
                    for (var i = 0; i < cutPosition; i++) { // Bottom Half of deque
                        tempList[j] = deque[i];
                        j++;
                    }
                    deque = tempList;
                    //TODO improve the space efficiency of this by using single tempVar instead of an entire tempList...
                } else {
                    return; // cut causes no changes for deque length of 0 or 1.
                }
            };

            //________________________________________________________________________ shuffle
            makeDeque.shuffle = function() {
                // shuffles using STOLEN CODE from http://bost.ocks.org/mike/shuffle/
                if (qLength > 1) {
                    // shuffle hapens only for length 2 or greater
                    var copy = [];
                    n = qLength;
                    var i = 0;
                    // While there remain elements to shuffle…
                    while (n) {
                        // Pick a remaining element…
                        i = Math.floor(Math.random() * n--);
                        // And move it to the new array.
                        copy.push(deque.splice(i, 1)[0]);
                    } // end while(shuffling down the array length)
                    deque = copy; // the shuffled copy is now the new deque
                } else {
                    return; // shuffle causes no changes for deque length of 0 or 1.
                }
            };

            convertValsFn = function(val) {
                val = val + 1;
                return val; // increment the value
            };

            //________________________________________________________________________ map
            makeDeque.map = function(mapFn) {
                for (var i = 0; i < qLength; i++) {
                    deque[i] = mapFn(deque[i]);
                }
                return deque; // return modified values
            };
            //________________________________________________________________________ compareValsFn
            compareValsFn = function(a, b) {
                if ((typeof a === typeof b) &&
                    (typeof b === 'string' || typeof b === 'number')) { // only allow sort comparisons for strings and numbers
                    var isGreater = 0; // equal
                    if (a > b) {
                        isGreater = 1;
                    } else if (b > a) {
                        isGreater = -1;
                    }
                    return isGreater;
                }
                debugger;
                return null; // a & b were not comparable for sorting purposes
                //TODO look at the alternative from MDN which is just "return a - b;" to see how that works for strings.
            };

            //________________________________________________________________________ sort
            makeDeque.sort = function(sortFn) {
                deque.sort(sortFn);
            };

	        // test print function
	        //________________________________________________________________________ testPrint
           	makeDeque.testPrint = function() {
	            var outStr = "[";
	            console.log("\n-START DequePrint -------- ");
	            for (var i = 0; i < qLength - 1; i++) {
	                outStr += deque[i] + ',';
	            }
	            outStr += "]";
	            console.log(outStr);
	            console.log("-END DequePrint -------- ");
	        };



            return { //one deque instance...
				top: 		makeDeque.top,
				bottom: 	makeDeque.bottom,  
				pop: 		makeDeque.pop, 
				push: 		makeDeque.push,  
				shift: 		makeDeque.shift, 
				unshift: 	makeDeque.unshift, 
				cut: 		makeDeque.cut, 
				map: 		makeDeque.map, 
				sort: 		makeDeque.sort,  
				shuffle: 	makeDeque.shuffle,
				testPrint:  makeDeque.testPrint,
				qLength: 	qLength,
				//deque:      deque,    // NOTE, this was exported for testing purposes, not PROD
			};

        } //end makeDeque
        return makeDeque;

    })(); //end IIFE definition and run it now!


//________________________________________________________________________ Export
// Export as node-style module:
if (typeof module != 'undefined')
    module.exports = makeDeque;



//________________________________________________________________________ TESTING STARTS HERE

function assert(claim,message) {
if (!claim) console.error(message);
}





// create some deques
var array10 = [1,2,3,4,5,6,7,8,9,10];
var myDeque10 = makeDeque(array10);



console.log("\n-START-------- starting Test deque length, top, bottom");
//test the first deque
assert(myDeque10.qLength===10, "qLength test failed, should be 10, reported " + myDeque10.qLength);
assert(myDeque10.top()===10, "top() test failed");
assert(myDeque10.bottom()===1,"bottom() failed");
console.log("-END-------- \n");


console.log("\n-START-------- starting Test deque pop push");
// //pop test
var temp = myDeque10.pop();
assert(temp===10, "pop() test failed");
myDeque10.push(temp); // push back what was popped
assert(myDeque10.top()===10, "push() test failed");
console.log("-END-------- \n");


console.log("\n-START-------- starting Test deque shift unshift");
//shift test
var temp = myDeque10.shift();
assert(myDeque10.bottom()===2 && temp ==1, "shift() test failed");
//unshift test
myDeque10.unshift(1);
assert(myDeque10.bottom()===1, "unshift() test failed");
console.log("-END-------- \n");


console.log("\n-START-------- starting Test deque sort and cut");
//cut test
console.log('------------- BEFORE cut()');
myDeque10.testPrint();
myDeque10.cut();
console.log('------------- AFTER cut()');
myDeque10.testPrint();


console.log('------------- BEFORE sort()');
myDeque10.testPrint();
myDeque10.sort();
console.log('------------- AFTER sort()');
myDeque10.testPrint();


