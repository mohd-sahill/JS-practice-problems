//Q1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
// let arr = [5,5,5]
// let sumArr = arr => {
//     sum = 0
//     arr.map(item => sum+=item )
//     return sum
// }

// let res = sumArr(arr)
//  console.log(res);

// Find average of an array and display the output.

// let arr = [6,7,4,3,5,3]
// let sumArr = arr => {
//     sum = 0
//     arr.map(item => sum+=item )
//  let average = sum / arr.length
//    return average
// }

// let res = sumArr(arr)
//  console.log(res);

//Q2. Find maximum and minimum of an array.

// let arr = [10,8,20,3,9,7,6,5]
// console.log();
// function findMinMax(array){
//   let max = array[0]
//   let min = array[0]

//   for(i=1;i<=array.length;i++){
//       if(array[i] > max){
//           max = array[i]
//       }
//       if(array[i] < min){
//           min = array[i]
//       }
//   }
//   console.log(max);
//   console.log(min);
// }

// findMinMax(arr)

// Find Median and Mode of an array.

// Median : (N+1/2)th term.
// Mode : Most repeating term


// let arr = [157, 158, 158, 159, 160, 160, 162, 165, 166, 167, 170];
// let findMedian = (arr) => {
//   let ascArr = [];
//   //first start with arranging then in ascending order
//   ascArr = arr.sort((secE, firstE) => {
//     return secE - firstE;
//   });
//   // no .of observations
//   let n = arr.length;
//   if (n % 2 !== 0) {
//     // add odd number formula
//     let medianObs = (n+1)/2
//     console.log(`the MEDIANth observation of this set is ${medianObs}\n and the answer is: ${arr[medianObs-1]}`);
//   }
// };
// findMedian(arr);

// console.log(res);
// Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43
// Find number of constants and vowels in a string.
// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
