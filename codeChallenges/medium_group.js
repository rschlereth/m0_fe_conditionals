var goodDrivingRecord = false
var age = 24
if (goodDrivingRecord === true && age >= 25)
console.log("You get a discount on your rental.")
else if (goodDrivingRecord === true || age >= 25)
console.log("You have to pay full price.")
else if (goodDrivingRecord === false && age < 25)
console.log("Someone else will have to sign for the rental.")