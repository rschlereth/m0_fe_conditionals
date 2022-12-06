// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log("Is 4 less than 9?", 4 < 9);
// this should log: true
// YOU DO: Explain.

var books = 3;
console.log("Is 4 less than books?", 4 < books);
// this should log: false
// YOU DO: Explain.

var friends = 6;
var siblings = 2;
console.log("Is friends greater than siblings?", friends > siblings);
// this should log: true
// YOU DO: Explain.

var attendees = 9;
var meals = 8;
console.log("Is attendees strictly not equal to meals?", attendees !== meals);
// this should log: true
// YOU DO: Explain.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log("Is user hungry and completed their homework?", isHungry && finishedHomework);
// this should log: false
// Determine if the user is hungry or has completed their homework
console.log("Is user hungry or has completed their homework?", isHungry || finishedHomework);
// this shuold log: true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does dog love to play and love treats?", lovesToPlay && lovesTreats);
// this should log true

// Determine if the dog loves to play and loves the dog park
console.log("Does dog love to play and love dog park?", lovesToPlay && lovesDogPark);
// this should log false

// Determine if the dog loves to play or loves the dog park
console.log("Does dog love to play or love the dog park?", lovesToPlay || lovesDogPark);
// this should log true


// Determine if the dog loves to play and is a puppy
console.log("Does dog love to play and is a puppy?", lovesToPlay && puppy);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: "Puppy is not defined". We have a variable established that the dog's age is 1, but we have nothing dictating what the boundaries of "puppydom" are.