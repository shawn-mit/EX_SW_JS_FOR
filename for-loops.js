

/*

Write a for loop that uses a counter variable initialized 
at 5 and then increments it by 10 every time it executes. 
Use console.log() to output the value of the counter 
variable each time through the loop. 
Stop execution of the loop if the counter 
variable's value is greater than 120.

Example output:

Current value is 5

Current value is 15

Current value is 25
*/


//create array that loops continously until 120 the max number? 
// create array and  input numbers as objects into the array ? 


var loopArr = [5];



for (var i = 5; i <= 120 ; i += 10){

 console.log( "Current value :", i);

};





/*
Decrement by division

Write a for loop with a counter variable initialized at 4096. 
Each time the loop executes divide the counter variable's 
value by 2. Use console.log() to output its value 
every time. When the counter variable's value is 1, 
stop execution.

Example output:

Current value is 4096

Current value is 2048

Current value is 1024

*/



var loopArr2 = [4096];

for (var i= 4096; i >=1 ; i /= 2 ){

 console.log( "Current value :", i);
	
}





/*
Array iteration

Create an array that contains the names of American Presidents. 
Loop over that array with a for loop, 
and use string concatenation with console.log() 
to output the order and name of each President (see example below).

Example output:

President #1 was George Washington

President #2 was John Adams

President #3 was Thomas Jefferson
*/


var namePrez  = [ "John F. Kennedy", "Calvin Coolidge", "Thomas Jefferson", "Barack Obama"];
//console.log(namePrez);

var nameP = namePrez.length;

//console.log(nameP);


for (var p = 0; p < nameP; p ++) {


console.log("President # " + (p + 1) + " was ", namePrez[p]);

//document.write = getElementById: ""

}





// Object iteration

// Use can use another kind of for loop to iterate over objects. 
// Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}


var antNames = "";

for (var antNames in antSpecies){
	
console.log(antNames);

}






