// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1


function findMin(...numbers){
  let theMin = Math.min(...numbers)
  return theMin
}
function findMax(...numbers){
  let theMin = Math.max(...numbers)
  return theMin
}

console.log(findMin(2,6,4,8,3))
console.log(findMax(2,6,4,8,3))