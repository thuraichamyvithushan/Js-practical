// day02


//1/
var challenge = 'learn Javascript';   

//2//
console.log(challenge);

//3//
console.log(challenge.length);

//4//
challenge = challenge.toUpperCase();

//5//

challenge = challenge.toLowerCase();

//6//
console.log(challenge.substring(0));
 
//7//
var originalString = "learn JavaScript";
var slicedString = originalString.slice(6, 20);

console.log(slicedString);

//8//
var myString = "learn JavaScript";

if (myString.includes("Script")) {
  console.log("The string contains the word 'Script'.");
} else {
  console.log("The string does not contain the word 'Script'.");
}

//9//
var myString = "learn JavaScript";
var wordsArray = myString.split(" ");

console.log(wordsArray);

//10//

var myString = "learn JavaScript";
var splitArray = myString.split(" ");

console.log(splitArray);

//11//

var inputString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companyArray = inputString.split(', ');

console.log(companyArray);

//12//

var originalString = "learn JavaScript";
var modifiedString = originalString.replace("JavaScript", "30 Days Of Python");

console.log(modifiedString);

//13//

var myString = "learn JavaScript";
var characterAtIndex15 = myString.charAt(15);

console.log(characterAtIndex15);

//14//

var myString = "learn JavaScript";
var characterCodeOfJ = myString.charCodeAt(6); 

console.log(characterCodeOfJ);

//15//

var myString = "learn JavaScript";
var positionOfA = myString.indexOf('a');

console.log(positionOfA); 

//16//

var myString = "learn JavaScript";
var lastPositionOfA = myString.lastIndexOf('a');

console.log(lastPositionOfA); // This will output the position of the last 'a' in the string

//17//

var sentence = "You cannot end a sentence with because because because is a conjunction";
var positionOfBecause = sentence.indexOf("because");

console.log(positionOfBecause);

//18//

var sentence = "You cannot end a sentence with because because because is a conjunction";
var lastPositionOfBecause = sentence.lastIndexOf("because");

console.log(lastPositionOfBecause);


//19//

var sentence = "You cannot end a sentence with because because because is a conjunction";
var positionOfBecause = sentence.search("because");

console.log(positionOfBecause); 

//20//

var myString = ' learn Javascript ';
var trimmedString = myString.trim();

console.log(trimmedString); 

//21//

var myString = 'learn Javascript';
var searchString = 'learn';

var result = myString.startsWith(searchString);

console.log(result); 

//22//

var myString = 'learn Javascript';
var searchString = 'Javascript';

var result = myString.endsWith(searchString);

console.log(result);

//23//

var myString = "learn Javascript";
var matches = myString.match(/a/g);

console.log(matches);

//24//

var part1 = '30 Days of ';
var part2 = 'JavaScript';

var mergedString = part1.concat(part2);

console.log(mergedString)

//25//

var originalString = 'learn Javascript';
var repeatedString = originalString.repeat(2);

console.log(repeatedString); 