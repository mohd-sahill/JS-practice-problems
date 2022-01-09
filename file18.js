//Q1. Given an array of objects of student's marks:

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.

const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.
// let highScore = 0,lowScore = 400,hStudentName = "",lStudentName = "",computerSum = 0;
// function schoolResult(data) {

//   for (i = 0; i <= data.length - 1; i++) {
//     let sum =
//       data[i].maths + data[i].english + data[i].computer + data[i].science;
      
//     console.log(`${data[i].name} scored total of ${sum} marks `);

//     computerSum += data[i].computer
//     if (highScore < sum) {
//       highScore = sum;
//       hStudentName = data[i].name;
//     }

//     if (lowScore > sum) {
//       lowScore = sum;
//       lStudentName = data[i].name;
//     }
//     if((sum/400)*100 >= 75){
//       console.log(`${data[i].name} secured  Grade A 
//       \n-----------------------------------------
//       passed
//       \n-----------------------------------------`);
//     }
//     else if((sum/400)*100 >= 60){
//       console.log(`${data[i].name} secured  Grade B       \n-----------------------------------------
//       passed
//       \n-----------------------------------------`);
//     }
//     else if((sum/400)*100 >= 35){
//       console.log(`${data[i].name} secured  Grade C      \n-----------------------------------------
//       passed
//       \n-----------------------------------------`);
//     }
//     else if((sum/400)*100 <= 35){
//       console.log(`${data[i].name} secured  Grade D      \n-----------------------------------------
//       failed
//       \n-----------------------------------------`);
//     }
//   }
//   console.log(
//     "the highest scoring student is :" +
//       hStudentName +
//       " with marks :" +
//       highScore + "\n-----------------------------------------"
//   );
//   console.log(
//     "the lowest scoring student is :" +
//       lStudentName +
//       " with marks :" +
//       lowScore + "\n-----------------------------------------"
//   );

//   function avg(sum){
//     let average = sum/5
//     console.log(`the average marks of students attending computer class is  :${average}`);
//   }
//   avg(computerSum)
// }
// schoolResult(studentDetails);

