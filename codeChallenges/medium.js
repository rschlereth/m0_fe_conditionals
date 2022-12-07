var goodDrivingRecord = false;
var age = 23;
if (goodDrivingRecord === true && age >= 25)
console.log("You get a discount on the car rental.");
else if (goodDrivingRecord === false || age < 25)
console.log("You have to pay full price."); 
else (goodDrivingRecord === false && age < 25)
console.log("Someone else will be required to sign for the rental.");