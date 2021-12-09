// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// function powerUp(num,power){
// let sum = num ** power
// console.log(sum)
// }

// powerUp(4,3)


function powerUp(num,power){
let pow = 1;
for(i=0;i<power;i++){
    pow *= num 
}
console.log(pow)
}

powerUp(2,3)