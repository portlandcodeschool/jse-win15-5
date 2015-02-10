//---- make User with closure -----
function makeUserFactory() {

    var userMsgLog = []; // persists through all calls to the factory()

    function makeUser(newUserName, newPassword) {

        var user = {
            // "en-closured" methods
            username: function() {
                return newUserName;
            },
            pwd: function() {
                return newPassword;
            },
            // references to methods "one scope outside" of the closure
            getName: makeUser.getName,
            getPwd: makeUser.getPwd,
            validate: makeUser.validate,
            record: makeUser.record
        }; // end of closure

        return user;
    }



    // shared methods for the user
    makeUser.getName = function() {
        return (this.username());
    };

    makeUser.validate = function(guess) { // TODO finish this
        return (guess === this.pwd() ? "CORRECT -- good guess" : "WRONG -- you are stoopid hackerr");
    };

    makeUser.getPwd = function() { // TODO remove this before production :-) bad idea, but helped with testing
        return ('password is ' + this.pwd());
    };

    makeUser.record = function(msg) {
        userMsgLog.push('-->' + this.getName() + ' logged a message: ' + msg + '\n');
    };

    // not in the closure, this is a factory method
    makeUser.getLog = function(logUserName) {
        // check for empty args
        var outStr = "Stoopid Hackerr, no logs for you!"; // the default answer

        // check for empty args to trigger the full log case
        if (arguments.length === 0) {
            outStr = "START of log file for everything \n";
            outStr += userMsgLog.join('\n');
        } else { // get log records for one user
            outStr = "START of log fileFor username = " + logUserName + '\n';

            for (var line in userMsgLog) {
                if (userMsgLog[line].indexOf(logUserName) >= 0) { // FOUND the user name in this log record
                    outStr += userMsgLog[line] + '\n';
                }
            }
        }
        outStr += "END of log file\n";
        return outStr;
    };

    return makeUser;

}





// testing to see if the basic structure works for getters --------------------------
var makeUserFn = makeUserFactory(); // semantics of problem 3 start to fall apart here - using userFactory.makeUser() would be nicer
var user1 = makeUserFn("bob", "sekret");

// what I wanted to do:  
//Still not sure why this did not work  
//TODO later go back and figure out why these semantics don't work - had to get over it and move on
// var userFactory = makeUserFactory();
// var user1 = userFactory.makeUser("bob", "sekret");

console.log("___ START ------- basic getter testing");
console.log("this is all that I can see from outside of makeUser: " + Object.keys(user1));

console.log("these dot access attempts should FAIL to show any data values.");
console.log("there is no visibility into the ''en-closured'' parts via ''dot'' notation");
console.log(user1.username);
console.log(user1.pwd);

console.log("these calls should WORK, they use the outer object functions to get at the en-closured part");
console.log(user1.getName());
console.log(user1.getPwd()); // this getter is a BAD idea for production, but GOOD Idea for testing
console.log("___ END of basic getter testing ------------------------");
console.log("___\n");

// testing to meet the assignment for problem 3 --------------------------
console.log("___ START OF testing to meet the assignment for problem 3 --------------------------");
var testName = "Loser2";
var testPWD = "Sekret2";
var guessPWD = "NOTSekret2";

var user2 = makeUserFn(testName, testPWD);
console.log("testing user2: name is:" + user2.getName() + " <<--should be same-->> " + testName);
console.log("testing user2: pwd is:" + user2.getPwd() + " <<--should be same-->> " + testPWD);
console.log("testing password Validate: " + user2.validate(guessPWD) + " <<--should FAIL");
console.log("testing password Validate: " + user2.validate(testPWD) + " <<--should PASS");
console.log("___\n");
console.log("___ testing the log functionality");


user3 = makeUserFn("Loser1", "Loser1Sekret");
user4 = makeUserFn("Hacker2","Hacker2Sekret");
user5 = makeUserFn("Hacker3","Hacker3Sekret");

var msgPart1 = ["A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
];

var msgPart2 = ["Blah Blah Blah 1",
    "Blah Blah Blah 2",
    "Blah Blah Blah 3",
    "Blah Blah Blah 4",
    "Blah Blah Blah 5",
    "Blah Blah Blah 6",
    "Blah Blah Blah 7"
];

for (var part1 in msgPart1) {
    for (var part2 in msgPart2) {
        user3.record(msgPart2[part2] + msgPart1[part1]);
        user4.record(msgPart2[part2] + msgPart1[part1]);
        user5.record(msgPart2[part2] + msgPart1[part1]);
    }

}

// output the formatted data
console.log(makeUserFn.getLog());

console.log("___");
console.log(makeUserFn.getLog("Bogus"));
console.log("___");

console.log("___");
console.log(makeUserFn.getLog("Hacker2"));
console.log("___");

console.log("___");
console.log(makeUserFn.getLog("Loser1"));
console.log("___");

console.log("this direct access should FAIL ");
makeUserFn.userMsgLog.push("GARBAGE");

console.log("___ END OF testing to meet the assignment for problem 3 --------------------------");
console.log("___");