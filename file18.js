
// const studentDetails = [
//   {
//     roll: "1",
//     name: "Rohan Singh",
//     maths: 86,
//     science: 90,
//     english: 75,
//     computer: 85,
//   },
//   {
//     roll: "2",
//     name: "Ritvik Patel",
//     maths: 27,
//     science: 30,
//     english: 35,
//     computer: 30,
//   },
//   {
//     roll: "3",
//     name: "Neha Maurya",
//     maths: 75,
//     science: 69,
//     english: 40,
//     computer: 75,
//   },
//   {
//     roll: "4",
//     name: "Mohit Verma",
//     maths: 21,
//     science: 31,
//     english: 45,
//     computer: 40,
//   },
//   {
//     roll: "5",
//     name: "Karan Trivedi",
//     maths: 70,
//     science: 80,
//     english: 35,
//     computer: 60,
//   },
// ];

//Q1. Print the name and total marks of each student.
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


//Q2. Salary calculation using OOPS concept.

// Create a Class using ES6 in JavaScript named Employee and assign necessary
// data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
// Create two Instances of Employee with all necessary details.
// Call the getSalary method of each instance and return the net salary based on your computation.

// class Employee{
//   constructor(name,id,homeRentA,basicSalary,incTax){
//   this.name = name;   
//   this.id = id;   
//   this.homeRentA = homeRentA;   
//   this.basicSalary = basicSalary;   
//   this.incTax = incTax;   
//   }

//   getSalary(){
//     let Allowances = this.homeRentA + this.incTax
//     let netSalary = this.basicSalary - Allowances
//     return netSalary
//   }
// }

// let employee1 = new Employee("shravan","01",500,25000,500)
// let employee2 = new Employee("shravan","01",500,33000,500)

// console.log(employee1.getSalary());
// console.log(employee2.getSalary());



//Q3. Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number,
// account balance, account type, ifsc and name it as BankAccount.
// Create three Instances(three customers) of BankAccount with all necessary details.
// Print the name of customers and their account balances.
// Calculate the average account balance from all the instances.

// class BankAccount{
//   constructor(name,bank,accNum,accBal,accType,ifsc){
//     this.name = name;
//     this.bankAcc = bank;
//     this.accNum = accNum;
//     this.accBal = accBal;
//     this.accType = accType;
//     this.ifsc = ifsc;
//   }
//   printInfo(){
//     console.log(`customer name:${this.name} \ncustomer Account balance:${this.accBal}`);
//   }
// }

// let customer1 = new BankAccount("sahil","SBI","00321144455",11200000,"current account","00000783EFGR")
// let customer2 = new BankAccount("danish","SBI","00321144455",12200000,"current account","00000783EFGR")
// let customer3 = new BankAccount("aiman","SBI","00321144455",13200000,"current account","00000783EFGR")

// customer1.printInfo()
// customer2.printInfo()
// customer3.printInfo()

const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

// Given an array of objects of items in cart, print:

// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount


function cartDetails(data){

 //1
  console.log(`there are ${data.length} items in cart`);

  let totalPrice = 0;
  let totalDiscount = 0;
  for(i=0;i<=data.length-1;i++){
    totalPrice += data[i].price
    totalDiscount += data[i].discount
  }

  //2
  console.log(`the total amount payable is ${totalPrice}`);

  //3
  findDiscAmt(totalPrice,totalDiscount)
function findDiscAmt(totPrice,totDisc){
  //  console.log(price,discount);
  let discPrice = (totPrice*totDisc)/100
  console.log(`you are saving ${discPrice} RS here`);
 }
}

cartDetails(cartItems)