// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

function typeOfTriangle(a,b,c){
    if(a==b && b==c && c==a){
        console.log("equilateral")
    }else if(a==b || b==c || c==a){
        console.log("isosceles")
    }else{
        console.log("scalene")
    }
}

typeOfTriangle(30, 60, 90)
console.log("hey");