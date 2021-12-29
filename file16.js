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

// let checkNum = (string) => {
//   for(char of string){
//     if(!isNaN(parseFloat(char)) && isFinite(char)){
//       console.log(`contains digit: ${char}`)
//     }
//   }
// }
// let string = "sahil"
//  checkNum("mohammedsahil6902@gmail.com")


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

//String advance questions

//Q1 Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// function replaceChar(string,c1,c2){
//     let fStr = []
//     for(char of string){
//       if(char === c1){
//           fStr.push(c2)
//       }else{
//           fStr.push(char)
//       }
//     }
//     return fStr.toString().replace(/,/g,"")
// }

// let res = replaceChar("sahil","s","j")
// console.log(res);

// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

// Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

// A program that counts the value of each character and prints the most repeated character?

// Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")