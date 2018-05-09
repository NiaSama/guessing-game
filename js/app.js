'use strict';

var userPoints = 0;

console.log('Hello TA\'s');

alert('Welcome to my lab 2 project!! For this project, you will be playing through a guessing game about me!');

var userName = prompt('Let\'s start with introductions. My name is Tanya. What is your name?');

alert('Hi ' + userName + '! I am glad you want to play! I hope you enjoy it.');

// Question 1
var answer1 = prompt('Okay! Do I own any pets?' , 'type yes or no').toLowerCase();
console.log('The user answered question 1 with: '+ answer1);

if (answer1 === 'yes' || answer1 === 'y') {
    alert('Good job! I do have pets! Two dogs, a husky mix and a shiba!')
    userPoints++;
} else {
    alert('Oh no! I actually have two dogs. Better luck next time!');
}

// alert('I forgot to mention, I will be grading you. You currently have ' + userPoints + ' points');

//Question 2
var answer2 = prompt('Next question. Do you think I play any instruments?').toLowerCase();
console.log('The user answered question 2 with:' + answer2);

if(answer2 === 'yes' || answer2 === 'y') {
    alert('Awesome, you\'re right! I do play instruments! I actually play 3; the piano, the guitar, and the ukelele.' , 'type yes or no')
    userPoints++;
}    else{
        alert('Aww, wrong. I do play instruments! 3 in fact.');
}

// When it's time to put points in code>> alert('You now have' + userPoints + 'points');

//Question 3
var answer3 = prompt('So fun fact, I am half Korean. That being said, do you think I like kimchi?' , 'type yes or no').toLowerCase();
console.log('The user answered question 3 with:' + answer3);

if(answer3 === 'no' || answer3 === 'n') {
    alert('Yay! You guessed right. I do NOT like kimchi. I\'ve tried to like it all my life, but I just can\'t.')
    userPoints++;
}   else{
        alert('Woops. That was a sneaky one huh? But sorry! No kimchi for meeeee.')
}

//Question 4
var answer4 = prompt('Do you think Fortnite is my favorite game??' , 'type yes or no').toLowerCase();
console.log('The user answered question 4 with:' + answer4);

if(answer4 === 'no' || answer4 === 'n') {
    alert('Yep you are right! I actually spent a lot of my spare time playing Overwatch instead!')
    userPoints++;
}   else{
        alert('Uh oh. Overwatch is my favorite game right now. But Fortnite is a close second :P. Good try though!')
}

//Question 5
var answer5 = prompt('Final question. Do you think I have tattoos??' , 'type yes or no').toLowerCase();
console.log('The user answer question 5 with:' + answer5);

if(answer5 === 'yes' || answer5 === 'y') {
    alert('You are right! I only have one right now but i\'m planning on getting my second one in October!')
    userPoints++;
}   else{
        alert('Oh noooo! I actually do have a tattoo! Planning on getting my second one in October. Good guess though!')
}
alert('Thank you for playing my guessing game!')