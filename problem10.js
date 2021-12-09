// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

function noOfWords(sentence){
let text = sentence.split(" ")
 console.log(`output: ${text.length}`)
}

noOfWords("hey hi how are you")