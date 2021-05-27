/////////////////////////////////////        ALGO 1      ////////////////////////////////////////////////

/*Algo 1
Define a variable between 0 and 100
Ask the user for a number until they find the mystery number.
The algorithm must indicate whether the given number is greater or less than the mystery number.
If the user finds the correct number the "Well done you have found" msg should appear!*/

// var number = Math.trunc(Math.random() * 100) + 1;
// console.log(number);

// guessGame();

// function guessGame() {
//   var guess = prompt("Guess the number between 1 and 100!");
//   if (guess == number) {
//     alert("well done! you found it!");
//   } else if (guess > number) {
//     alert("too high, guess again!");
//     guessGame();
//   } else if (guess < number) {
//     alert("too low, guess again!");
//     guessGame();
//   }
// }

//////////////////////////////////////       ALGO 2    //////////////////////////////////////////////////

/*Algo 2
Ask the user for a number between 0 and 100
The algorithm should display the sum of numbers less than or equal to this number.
For example, if we enter 5, the program must calculate: 1 + 2 + 3 + 4 + 5 = 15
NB: one wishes to display only the result, not the decomposition of the calculation.*/

// var number = prompt("Number between 1 and 100");

// function sumTo(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(sumTo(number));

/////////////////////////////////////        ALGO 3     ///////////////////////////////////////////////////

/*Algo 3
Ask the user to enter 20 numbers
The algorithm should display the largest number from the list entered by the user.
For example: Enter the number number 1: 12
Enter number number 2: 14
etc.
Enter number number 20: 6
The largest of these numbers is: 14*/

// alert("please enter 20 numbers");

// //create the prompt and the array
// var inputArray = [];

// for (var i = 0; i < 20 /*size of array*/; i++) {
//   inputArray[i] = prompt("Enter Number " + (i + 1) + " of 20");
// }

// console.log(inputArray);

// /*displays the largest number*/
// console.log(Math.max(...inputArray) + " is the largest number");

//////////////////////////////////////        ALGO 4       /////////////////////////////////////////////////
/*Algo 4
Ask the user to enter X numbers. The request ends when the user enters the number 0.
The algorithm must display all numbers from smallest to largest!*/

// alert("please enter numbers");

// var inputArray = [];

// for (var i = 0; i < Infinity; i++) {
//   inputArray[i] = prompt("Enter Number " + (i + 1));
//   if (inputArray[i] == 0) {
//     alert("you entered 0");
//     break;
//   }
// }

// /*sort array from lowest value to highest value*/

// inputArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(inputArray);

//////////////////////////////////////////     ALGO 5   NOT FINISHED    ////////////////////////////////////////////////
/*Algo 5
Ask the user to enter a sentence.
The algorithm must redisplay the sentence but change the character (or his costume) according to his
length:
Less than 10 characters: character 1
Between 10 and 50 characters: character 2
More than 50 characters: character 3*/

var sentence = prompt("why do you like coding?");
window.onload = function () {
  var sentenceElement = document.getElementById("codinganswer");
  sentenceElement.innerText = "I like coding because " + sentence;
};

if (sentence.length < 10) {
  document.getElementById("img1").style.display = "block";
  // document.write("Very simple, like Homer");
  document.getElementById("homer").innerHTML = "Very simple, like Homer";
} else if (sentence.length > 10 && sentence.length < 50) {
  document.getElementById("img2").style.display = "block";
  document.getElementById("bart").innerHTML = "Ok cool, like Bart";
} else if (sentence.length > 50) {
  document.getElementById("img3").style.display = "block";
  document.getElementById("lisa").innerHTML = "Very complex, like Lisa";
}
// NOT FINISHED

//////////////////////////////////////// ALGO 6 ///////////////////////////////////////////////////////////
/*Algo 6
Ask the user to enter a number
The algorithm should display whether the number is prime or not:
If it is not, the algorithm should display its divisors.
NB: A prime number is a natural number which admits exactly two distinct whole divisors and
positive (which are then 1 and itself). So, 1 is not prime because it has only one positive integer divisor;
0 either because it is divisible by all positive integers.*/

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(
//   prompt("please enter a number, I'll tell you if it's a prime number or not")
// );
// let isPrime = true;

// const factors = (number) =>
//   [...Array(number + 1).keys()].filter((i) => number % i === 0);

// // check if number is equal to 1
// if (number === 1) {
//   alert("1 is neither prime nor composite number.");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     alert(`${number} is a prime number`);
//   } else {
//     alert(`${number} is a not prime number`);
//     alert("Its factors are " + factors(number));
//   }
// }

// // check if number is less than 1
// else {
//   alert("The number is not a prime number.");
// }

//////////////////////////////////////////////  ALGO 7 /////////////////////////////////////////////////////
// Algo 7
// Make the user choose a number between 0 and 100
// The algorithm must propose numbers: the user must indicate whether the number he has chosen is greater,
// less than or equal to the proposed number
// If the algo finds the number in less than 5 tries you lose otherwise you win!

////////////////////////////////////////// CALCULATOR /////////////////////////////////////////////////////

// If you have already done them in javascript:
// Good game ! So now you are going to make a basic calculator: no matter what the appearance and the
// method, the result is all that matters to me in this exercise.
// ! Warning ! : 2 + 2 = 4 not 22
