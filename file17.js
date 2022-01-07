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

//Q3 Find Median of an array.

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

//Q4. Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

// let arr1 = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// let arr3 = [1,2,3,4,5]

// let sumMultArr = (ar1,ar2) => {
//     let sumAr1 = 0
//     let sumAr2 = 0
//  ar1.map(num => {
//     sumAr1 += num
//  })
//  ar2.map(num => {
//     sumAr2 += num
//  })
//  console.log(`the sum of this 2 array is ${sumAr1+sumAr2}`);
// }

//efficient solution for infinite array parameters
// let sumMultArr = (...arr) => {
//     let sum = 0
//     arr.map((item) => {
//         item.reduce((initialValue,currentValue) => {
//         sum += currentValue
//         },0)
//     })
//     console.log(sum);
// }
// sumMultArr(arr1,arr2,arr3)

// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
// let arr = [1,2,3,4,5]
// function shifArr(array,x){
// let res = array.splice(-x).concat(arr)
// console.log(res);
// }

// shifArr(arr,3)

// ADVANCE

// Find the sum of two matrix.

// let matrix1 = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
// ];

// let matrix2 = [
//   [3, 3, 3],
//   [4, 3, 3],
//   [1, 1, 1],
// ];

// let sumArr = (array1, array2) => {
//     let sumArray = [[],[],[]]

//     //check whethear the matrix is valid
//   if (matrix1.length > matrix2.length && matrix1.length > matrix2.length) {
//     console.log("not a valid matrix to add");
//   }else{
//     //start looping though first dimension of array
//       for(i=0;i<=array1.length-1 && i<= array2.length-1;i++){
//           console.log(i);
//          //target each index of the particuler array
//           for(j=0;j<=array1.length-1 && j<= array2.length-1;j++){          
//               console.log(j)
//         //store the targeted index value in a variable
//              let addNum1 = array1[i][j]
//              let addNum2 = array2[i][j]
//         //push the added value to the empty array
//             sumArray[i].push(addNum1+addNum2)
//           }
//       }
//   }
//   for(arr of sumArray){
//       console.log(arr);
//   }
// };
// sumArr(matrix1, matrix2);

// console.log(matrix1);

//the area of matrix problem
// Display transpose of matrix. Explaination https://www.varsitytutors.com/linear_algebra-help/the-transpose
// Find Identity matrix. Explanation https://www.varsitytutors.com/hotmath/hotmath_help/topics/identity-matrix
