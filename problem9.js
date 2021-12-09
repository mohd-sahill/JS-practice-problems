// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

//(3sqrt3 s2)/2

function areaOfHexagon(len){
let calc = (3 * Math.sqrt(3) * len**len)/2 ;
return calc
}

console.log(areaOfHexagon(10))
