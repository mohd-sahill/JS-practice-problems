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

// class Math{
//     constructor(area){
//      this.area= area
//     }
//    arSquare(){
//        console.log(this.area * this.area)
//    }
//    arParam(){
//        console.log(4 * this.area)
//    }
//    arSurAr(){
//        console.log(6 * this.area * this.area)
//    }
//    volume(){
//        console.log(this.area * this.area * this.area)
//    }
// }

// let ans = new Math(5)

// ans.arSquare()
// ans.arParam()
// ans.arSurAr()
// ans.volume()



//Q4. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// function calProfit(costP,sellP){
//     if(costP>sellP){
//         console.log(costP-sellP+" loss")
//     }else{
//         console.log(sellP-costP+" profit")
//     }
// }

// calProfit(300,600)



//Q5. Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// let num = 100;
// let sum = 0;
// for(i=0;i<=num;i++){
//     sum += i;
// }
// console.log(sum)



//Q6. Write a JavaScript program to compute the sum of all digits that occur in a given string.
// Input: 1234
// Output: 1+2+3+4 = 10

// function addString(numString){   
//  let sum = 0   
//  numString.split("").map((item) => {
//     let num = parseInt(item)
//    return sum += num
//  })
//  console.log(sum)
// }

// addString("1234")

//Q7. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// function rotateX(number,rott){
//     let numArr = []
//     let rotatedArr = []
//     String(number).split("").map((item) => {
//            numArr.push(Number(item)) 
//          })
// //   numArr.splice(rott,rott)
// let spliced = numArr.reverse().splice(0,rott)
//  rotatedArr.push(...numArr,...spliced)
//  console.log(rotatedArr.reverse());
// }

// rotateX(1234,2)
// //3412
// rotateX(123456,3)
// //456123