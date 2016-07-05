//Store Multiple Values in one Variable using JavaScript Arrays
var array = ["John", 23];
var myArray = ["Juan", 32];
document.getElementById("demo").innerHTML = myArray;

// Nest one Array within Another Array
// This is also called a Multi-dimensional Array.
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray1 = [["Belive in Green", 102], ["Off!", 55]];
document.getElementById("demo1").innerHTML = myArray1;

// Access Array Data with Indexes
// Arrays use zero-based indexing
// Example
var ourArray1 = [1,2,3];
var ourData = ourArray1[0]; // equals 1
// Setup
var myArray2 = [1,2,3];
// Only change code below this line.
var myData = myArray2[0];
document.getElementById("demo2").innerHTML = myData;
document.getElementById("demo3").innerHTML = myArray2[0];

//Modify Array Data With Indexes
// Example
var ourArray2 = [1,2,3];
ourArray2[1] = 3; // ourArray now equals [1,3,3].
// Setup
var myArray3 = [1,2,3];
// Only change code below this line.
myArray[0] = 3;

// Access Multi-Dimensional Arrays With Indexes
// Setup
var myArray4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData1 = myArray4[2][1];
document.getElementById("demo4").innerHTML = myData1;

// Manipulate Arrays With push()
// Example
var ourArray3 = ["Stimpson", "J", "cat"];
ourArray3.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray5 = [["John", 23], ["cat", 2]];
// Only change code below this line.
myArray5.push(["dog",3]);
document.getElementById("demo5").innerHTML = myArray5;

// Manipulate Arrays With pop()
// Example
var ourArray4 = [1,2,3];
var removedFromOurArray = ourArray4.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup
var myArray6 = [["John", 23], ["cat", 2]];
// Only change code below this line.
var removedFromMyArray = myArray6.pop();
document.getElementById("demo6").innerHTML = removedFromMyArray;

// Manipulate Arrays With shift()
//.shift() comes in. It works just like .pop(), except it removes
// the first element instead of the last.
// Example
var ourArray5 = ["Stimpson", "J", ["cat"]];
removedFromOurArray2 = ourArray5.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray7 = [["John", 23], ["dog", 3]];
// Only change code below this line.
var removedFromMyArray3 = myArray7.shift();
document.getElementById("demo7").innerHTML = removedFromMyArray3;
