//Q1. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12


// function simpleInt(princ,time,rate){
//  console.log((princ*time*rate)/100)
// }

// simpleInt(100,6,2)


// Q2.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

// function simpleInt(fer){
// console.log((fer - 32) * 5/9)
// }

// simpleInt(56)



//Q3. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

class Math{
    constructor(area){
     this.area= area
    }
   arSquare(){
       console.log(this.area * this.area)
   }
   arParam(){
       console.log(4 * this.area)
   }
   arSurAr(){
       console.log(6 * this.area * this.area)
   }
   volume(){
       console.log(this.area * this.area * this.area)
   }
}

let ans = new Math(5)

ans.arSquare()
ans.arParam()
ans.arSurAr()
ans.volume()