// find out if the number is odd or even?

// var number = 20;

// if (number % 2 === 0){
//     console.log(number + " is even number");
// } else {
//     console.log(number + " is odd number");
// }

// odd - 3,5,7,9,11.. / it is not divisble by 2 
// even - 2,4,6,10,12,.. / it is divisble by 2 


// find if the year is leap year or not?

// Hints: If a year is exactly divisible by 4 and not divisible by 100, then it is a leap year. Or if a year is exactly divisible by 400 then it is a leap year.

// var year = 2024; // 5.06

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
//     console.log(year + " is a leap year");
// } else {
//     console.log(year + " is not a leap year");
// }


// && (AND) - All the conditions should be true
// || (OR) -  any of the conditions can be true


// var person = "shakib"; // mandatory
// var age = 24; // mandatory
// var box = "orange"

// if ((person == "shakib" && age == 24) || box == "apple"){
//     console.log(true);
// } else {
//     console.log(false);
// } 

// Write a JS program to input marks of 3 subjects Physics, Chemistry,  and Computer. Calculate percentage and grade according to following:

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage < 60: fail.

// var physics = 87;
// var chemistry = 88;
// var computer = 81;

// var total = (physics + chemistry + computer);
// var average = total / 3;

// // console.log(total)
// console.log(average)

// if (average >= 90){
//     console.log("Grade A")
// } else if (average >= 80) {
//     console.log("Grade B")
// } else if (average >= 70) {
//     console.log("Grade C")
// } else if (average >= 60) {
//     console.log("Grade D")
// } else {
//     console.log("fail")
// }

// Find the maximum between 3 numbers?
// 30,50,12

// SOLVED 


// FOR LOOP 

// 1-10 NUMBER CONSOLE LOG KORE DAO 
// 10-30 j number gula odd segula print krte hbe
// find out the odd numbers between 10 to 30.

// for (var i = 10; i <= 30; i++){
//     // console.log(i)
//     if (i % 2 != 0){
//         return i;
//     }
// }
// find out the even numbers between 3 to 20.

// var num = 5;
// // num++ // ++ 1 kore se barbe
// // num++ 
// // num++
// num-- // -- 1 kore se kombe
// num-- // -- 1 kore se kombe
// // num = num + 1;
// console.log(num);

// // to check if the number is positive negative or 0;
// let number = 0;

// if (number > 0){
//     console.log("positive")
// } else if (number < 0){
//     console.log("negative")
// } else {
//     console.log("0")
// }