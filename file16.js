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

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let checkVow = (string) => {
//   let result = "";
//   for (i = 0; i <= string.length - 1; i++) {
//     if (!vowels.includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result
// };

// let filter = checkVow("sahil");
// console.log(filter)

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

let checkNum = (string) => {
  for(char of string){
    if(!isNaN(parseFloat(char)) && isFinite(char)){
      console.log(`contains digit: ${char}`)
    }
  }
}
let string = "sahil"
 checkNum("mohammedsahil6902@gmail.com")


// A program that reads three strings and prints the longest and smallest one

// let str1 = "hey hi afafafadf adgadgad ga gadg";
// let str2 = "hello mr sahil you are hot";
// let str3 = "heyfasfasfasfasfasfasfasfaffafafaff assd";

// function checkLen(str1, str2, str3) {
//   let s1, s2, s3;
//   s1 = str1.length;
//   s2 = str2.length;
//   s3 = str3.length;

//   if (s1 > s2 && s1 > s3) {
//     console.log(s1 + ":string 1 is longest");
//   } else if (s2 > s3 && s2 > s1) {
//     console.log(s2 + ":string 2 is longest");
//   } else if (s3 > s1 && s3 > s2) {
//     console.log(s3 + ":string 3 is longest");
//   }
// }

// checkLen(str1, str2, str3);

// A program that counts number of vowels and consonants in a String?

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let consonents = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
// function countVc(string){
//   let filVowels = "";
//   let filConsonents = "";
//   for(i=0;i<=string.length-1;i++){
//     if(vowels.includes(string[i])){
//       filVowels += string[i]
//     }
//     else if(consonents.includes(string[i])){
//       filConsonents += string[i]
//     }
//   }
//   console.log(`the vowels are: ${filVowels}`);
//   console.log(`the consonents are: ${filConsonents}`);
// }

// countVc("hey hi neighbour")

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// function stringCal(string){
//   let len = 0;
//   for(i=0;i<=string.length;i++){
//     len += 1
//   }
//   if(len>7){
//     return true
//   }else{
//     return false
//   }
// }
// let result = stringCal("sahilmohammed")
// console.log(result);

// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// function checkPel(string){
//   let revStr = string.split("").reverse().join("")
//   if(string === revStr){
//     console.log(string+ ":is a pelindrome")
//   }else{
//     console.log("not a pelindrome");
//   }
// }

// checkPel("dad")

// For a given input string(str), write a function to print all the possible substrings.Without using substr method



// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
