// Write a program that converts the string into uppercase

// let string = "sahil"
// console.log(string.toUpperCase())

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// function add(str1,str2){
//  return str1.concat(str2);
// }
// console.log(add("mohammed " , "sahil"))

// Program that reads string and count number of characters present in the string

// let countChar = string => {
//     let sum = 0
//     for(i=0;i<=string.length-1;i++){
//        if(string[i] == " "){
//            continue
//        }else{
//        sum++
//        }
//     }
//     console.log(sum)
// }
// countChar("mohammed sahil")

// Write a program that converts string like "124" to 124

// string = "124"
// console.log(parseInt(string));

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let checkVow = (string) => {
  let result = "";
  for (i = 0; i <= string.length - 1; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  return result
};

let filter = checkVow("sahil");
console.log(filter)

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// A program that reads three strings and prints the longest and smallest one

// A program that counts number of vowels and consonants in a String?

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// Write a program that takes two strings and copies smaller string into bigger string

// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// For a given input string(str), write a function to print all the possible substrings.Without using substr method

// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case