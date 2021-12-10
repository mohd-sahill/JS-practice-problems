// Medium mode 

// 1Q.
// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// function findLen(array){
//   return array.length 
// }


// console.log(findLen([1,2,3,4,5]))


// 2Q. 
// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// function indexOfarr(array,element){
//  array.filter((e,ind) => {
//    if(element === e){
//     console.log(ind)
//    }
//  })

// }

// indexOfarr([1,6,3,5,8,9], 6)


// 3Q. 
// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

//  function replace(arr,exVal,repVal){
//    for(i=0 ; i<=arr.length-1 ; i++){
//        if(arr[i]===exVal){
//            arr[i] = repVal
//        }
//    }
//    console.log(arr)
//  }
// replace([1,5,3,5,6,8], 8, 10)


// 4Q. 
// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6] 

// function mergeArray(arr1,arr2){
//  let arr3 = [...arr1,...arr2]
//  console.log(arr3)
// }


// mergeArray([1,3,5,4,5,3], [2,4,6,7,5,6]) 

// 5Q. 
// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// function charAt(string,num){
//    for(i=0;i<=string.length-1;i++){
//       if(num === i){
//           console.log(string[i])
//       }
//    }
// } 

// charAt("neoGcamp", 4)



// 6Q. 
// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// function minDate(date1,date2){

// let d1 = new Date(date1)
// let d2 = new Date(date2)
//  if(d1>d2){
//      console.log(d2.toDateString());
//  }else{
//      console.log(d1.toDateString());
// }
// }
// minDate('2021/05/02', '2021/01/24')

