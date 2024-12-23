// js lab 2

`use strict`

function fortuneteller(name, age){
    let fortune = "";
/*
for names:
If the name is longer than 7 characters: "will marry late in life."
If the name is shorter than 5 characters: "will marry within a year."
If the name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opportunity."
If the first letter of the name is "R": "will be rich."
If the name contains the letter 'i': "will fall in love this week."

//KEY FUNCTION:
    .legth --> it tells you the length of a string. works with any variable that is a STRING.
    let message = "Hello!"
    message.length will equal to 6

    .includes --> it tells you if a string contains a specific character. returns true or false.
    let message = "coding"
    message.includes("a")--> false
    message.includes("i")--> true

    .toUpperCase() or .toLowerCase()
    let message = "hello world"
    message.toUpperCase() will print HELLO WORLD
    message.toLowerCase() will print hello world
    A = a//return false
    A.toLowerCase() = a//return true

    Accessing specific letter inside a string:
        let message = "I am an incredible programmer";
        //get the first letter of a string
        message[0]//I
        message[5]//a
        message[11]//r

        --remember arrays--
        let array = [1,2,5,6]//index in 0
        console.log(array[0])//prints 1
        console.log(array[1])//prints 2
        console.log(array[2])//prints 5
        console.log(array[3])//prints 6

*/ 

    if(name.length > 7){
        fortune += name + "will marry later in life." //name = Andrea this will print "Andrea will marry later in life."

    } else if (name.length < 5){
        fortune =+ name + "will marry within a year."
    } else if(name.length >= 5 && name.length <= 7){
        fortune =+ name + "will encounter a once-in-a-lifetime opportunity."
    }
    if(name[0].toUpperCase() === `R`){
        fortune += name + "will be rich."
    }

    if (name.includes(`i`)){
        fortune += name = "will fall in love this week."
    }
/*

if age = 100, then "you will win the lottery during your lifetime"
if age is even number, then "you will have 8 kids all at once."
if age is < 18, then "you will fail all your classes if you do not wash your clothes every day."
*/

if (age === 100){
fortune += name + "will win the lottery during their lifetime"

}

if (age % 2 === 0){ //to know if a number is even, the remainder of the number divided by 2 should be 0
    fortune += name + "will have 8 kids all at once."
}

if (age < 18){
    fortune += name + "will fail all their classes if they do not wash their clothes every day."
}

return fortune;


}


console.log("Welcome to Madame Tristi's! See what the future holds!")

let name = prompt("What is your name?");
let age = prompt("What is your age?"); //Recieves age as a string/text

age = Number(age); //changing the type of age so it is treated as a Number

console.log(fortuneteller(name, age));