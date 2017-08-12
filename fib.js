'use strict';

/*
0 1 1 2 3 5 8 13 21 34
*/

var fibArray = [];
var firstNum = 0;
var secondNum = 1;
for (var i = 0; i < 10; i++) {
  if (i === 0) {
    fibArray.push(firstNum);
    continue;
  } else if (i === 1) {
    fibArray.push(secondNum);
    continue;
  }
  var tmp = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = tmp;
  fibArray.push(tmp);
}

var userName = '';

function getName() {
  var userName = prompt('What is your name, contestant?');
  console.log(userName);
}
getName();
//var userName is global. if you set a new value for that ver within a function, it will retain that value globally
//

function stateLivedIn() {
  var statesLiveInArray = ['Arizona','Oklahoma','Hawaii'];
  for (var i = 0; i < 6; i++) {
    var state = prompt('Can you guess a state I have lived in?');
    console.log(state);
    if (statesLiveInArray.includes(state)){
      correctAnswer++;
      alert('Correct!');
      break;
    } else {
      alert('Keep trying!');
    }
  }
}
//assuming pictureQuestion and travelQuestions and climbQuestion are variables...
var allQuestions = [pictureQuestion, travelQuestion, climbQuestion]
for (var i = 0; i < allQuestions.length; i++) {
  var thisQuestion = allQuestions[i];
  thisQuestion();
}

/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the parameters and values that were input/calculated in the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.
For TODO item, be sure to change it to say DONE when you have successfully completed the task*/

// TODO: Write your code here
function sum(a,b){
  var result = a + b;
  var output = 'The sum of ' + a + ' and ' + b + ' is ' + result + '.';
  return [result, output];
}
