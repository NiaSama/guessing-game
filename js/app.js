'use strict';
var userPoints = 0;
alert('Hello! Welcome to my page. My name is Tanya!');
var userName = prompt('What is your name?');
console.log ('User\'s name is:' + userName);

alert ('Hi ' + userName + '!! Nice to meet ya. Let\'s play a guessing game so you can get to know me!');

//Question 1
function questionOne() {
  var answer1 = prompt('Do I own any pets???' , 'type yes or no').toLowerCase();
  console.log('User answered question 1 with: ' + answer1);

  if(answer1 === 'y' || answer1 === 'yes') {
    alert('Good job! I do own pets. Two puppies!');
    userPoints ++;
  } else {
    alert('Oh no! I actually do own pets! Two puppies.');
  }
  alert('I forgot to mention, I will be grading you. You currently have ' + userPoints + '/7 points.');
  }
questionOne();

//Question2
function questionTwo() {
  var answer2 = prompt('Next question. Do you think I play any instruments?').toLowerCase();
  console.log('The user answered question 2 with:' + answer2);

  if(answer2 === 'y' || answer2 === 'yes'){
    userPoints++;
    alert('Good job!! I do play instruments. 3 in fact! You now have ' + userPoints + '/7 points.');
  } else{
    alert('Aww better luck next time. I do play instruments. 3 in fact! You now have ' + userPoints + '/7 points.');
  }
}
questionTwo();

//Question3
function questionThree() {
  var answer3 = prompt('So fun fact, I am half korean. That being said, do you think I like kimchi??').toLowerCase();
  console.log('The user answered question 3 with: ' + answer3);

  if(answer3 === 'n' || answer3 === 'no'){
    userPoints++;
    alert('Good guess! I do not like kimchi... You now have ' + userPoints + '/7 points.');
  } else {
    alert('Tricky question right? I actually do not like kimchi... sorry! You now have ' + userPoints + '/7 points.');
  }
}
questionThree();

//Question4
function questionFour() {
  var answer4 = prompt('Do you think fortnite is my favorite game?').toLowerCase();
  console.log('The user answered question 4 with: ' + answer4);

  if(answer4 === 'n' || answer4 === 'no'){
    userPoints++;
    alert('You are right! Overwatch is actually my favorite game right now. You now have ' + userPoints + '/7 points.');
  } else {
    alert('Sorry! Fortnite is not my favorite game. I actually really like OverWatch. You now have ' + userPoints + '/7 points.');
  }
}
questionFour();

//Question5
function questionFive() {
  var answer5 = prompt('Do you think I have tattoos?').toLowerCase();
  console.log('The user answered question 5 with: ' + answer5);

  if(answer5 === 'y' || answer5 === 'yes'){
    userPoints++;
    alert('Yup! I have one right now and will be getting my second one in October! You now have ' + userPoints + '/7 points.');
  } else {
    alert('Awww, I actually do have tattoos. You now have ' + userPoints + '/7 points.');
  }
}
questionFive();

//Question 6
function questionSix() {
  var guessCount = 4;
  do{
    var answer6 = prompt ('Alright time to guess. How many states do you think I have lived in outside of Washington state? You have ' + guessCount + ' tries to guess.' , 'Enter a number 1 - 10.');
    console.log('User guess: ' + answer6);
    answer6 = parseInt(answer6);
    if(answer6 === 5) {
      alert('Wow great guess! How did you know?');
      userPoints++;
    }else if(answer6 < 5) {
      alert('Aww too low.');
      guessCount--;
    } else if (answer6 > 5){
      alert('Aww too high.');
      guessCount--;
    }
  } while(answer6 !== 5 && guessCount > 0);
  if (guessCount === 0){
    alert('Oh no, you ran out of tries. Let\'s go to the next question.');
  }
}
questionSix();

//Question7
function questionSeven() {
  var flag = true;
  var movieGuess = 6;
  var movies = ['totoro', 'howl\'s moving castle', 'ponyo'];
  do {
    var answer7 = prompt('Last question! What do you think my favorite ghibli movie is? You have ' + movieGuess + ' tries.').toLowerCase();
    console.log('The user answered question 7 with: ' + answer7);
    for(var i = 0; i < movies.length; i++) {
      if(answer7 === movies[i]) {
        flag = false;
      }
    }
    if (flag === false) {
      alert('Wow good job! You got that correct!');
      userPoints++;
      break;
    } else {
    alert('Oh no!');
        movieGuess--;
    }
  } while (movieGuess > 0 && flag);
}
questionSeven();

alert('Awesome you are all done! You managed to get ' + userPoints + '!!' );