// Advance concepts for practice


// Q1. 
// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// function encodeString(string,num){
// let alphaStr = "abcdefghijklmnopqrstuvwxyz"
// let alphaarr = alphaStr.split("")
// let myCode = []
// let returCode = []
// for(i=0;i<=string.length-1;i++){
//     for(charIn in alphaarr){
//         if(string[i] === alphaarr[charIn]){
//             let stringIndex = parseInt(charIn)
//             let encodeVal = stringIndex + num
//             myCode.push(encodeVal)
//         }
//     }
// }
// // console.log(myCode)
//   for(codeInd of myCode){
//     returCode.push(alphaarr[codeInd])
//   }
//     let returCodeStr = returCode.toString()
//     console.log(returCodeStr);
// }
// encodeString("neogcamp",2)


// Q2. 
// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// String.prototype.replaceAt = function(index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

// function toSentenceCase(sentence){
//     let sentenceArr = sentence.split(" ")
//     let capWordArr = []
//     let callback = {
//         name : "sahil",
//         func(){
//             console.log(this)
//         }
//     }
//     callback.func()
//     for(word of sentenceArr){
//      capWord = word.charAt(0).toUpperCase()
//     //  console.log(word)
//     let repWord = word.replaceAt(0,capWord)
//     capWordArr.push(repWord)
//     } 
//  console.log(capWordArr.toString().replace(/,/g,' '))
// }

// toSentenceCase('my name is sahil')
