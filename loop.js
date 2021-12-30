// ++ > increase value by 1
// -- > decrease value by 1

// print out number between 1-30; 
// print out number between 7-25; 
// print out the odd number between 7-25; 


// for (var i = 7; i <= 25; i++){
//     if(i % 2 == 0){
//         console.log(i + " is even number")
//     } else {
//         console.log(i + " is odd number")
//     }
// }


// while loop

// print out number between 1-30 using while loop; 

// let i = 1

// while (i <= 30) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }




function addition(a, b) {
    
    let add = (a + b);
    let division = (a / b);
    let multiply = (a * b);
    console.log(add);
    console.log(division);
    console.log(multiply);

}

addition(40,20);


// write a function which to print out list between two numbers 
// example 1 and 30 result will be 1,2,3,4,...30

function loop(start, end){
    for (let i = start; i <= end; i++){
        if(i % 2 === 0){
            console.log(i + " is even")
        }
    }
}

// loop(99,150);





// write a function which takes a user as input and bade "Good Morning, ________ "

function bade(name){
    console.log("I'm a slow learner but i learn - by " + name)
}

bade("Nadia")