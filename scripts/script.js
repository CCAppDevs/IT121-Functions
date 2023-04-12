console.log("Running my script");

// make a piece of data that represents a person

let name = "Jesse Harlan";
let gender = "Male";
let age = 40;
let height = 6;
let weight = 300;
let phone = "5551212";
let email = "jesse.harlan@centralia.edu";


let person = {
    fname: "Jesse",
    lname: "Harlan",
    fullName: function() {
        return this.fname + " " + this.lname;
    },
    gender: "Male",
    age: 40,
    sayHello: function() {
        console.log("I did a thing!");
        return this.fullName() + " says hello!";
    }
};

// console.log(person.fullName());

// console.log(fname);
// console.log(person.fname);

// array
let persons = [];

// make a function that tells whether the person is an adult



// function that takes two numbers and returns the lower
let num1 = 10;
let num2 = 7;

console.log(Min(num1, num2));
console.log(num1); //


// function declaration
function Min(a, b) {
    if (a < b) {
        return a;
    }
    
    return b;
}

// sum all numbers from 0 to N
// test case sum(5) = 15


console.log(Sum(5));

function Sum(end) {
    // start by creating a bucket
    let result = 0;

    // do the thing ?
    while (end > 0) {
        result = result + end;
        end--;
    }

    // output
    return result;
}

// unit of work: n + Sum(n - 1)

// recursion
function RecursiveSum(end) {
    // stop at 0
    if (end <= 0) {
        // stop
        return 0;
    }

    return end + RecursiveSum(end - 1);
}

// RecursiveSum(5)
// Sum(5 + Sum(4 + Sum(3 + Sum(2 + Sum(1 + Sum(0))))))
// 15


// console.log(a); // out of scope

// loops
// while loop (while condition is true, do the thing)
let count = 10;

while (count > 0) {
    // do thing
    console.log("doing thing in while loop");
    count--;
}

// do while loop (do the thing once. While condition is true, do the thing)
do {
    console.log("Doing thing in do while loop");
} while (count > 0);

// range-based for loop (do the thing x amount of times)
for (let i = 0; i < 10; i++) {
    
}

// for each loop (for each element in collection do a thing)