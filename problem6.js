// Write a Program to take a number input from user and find if the number is Prime or not.


number= prompt("hey give number bitch")
let isPrime = true;

for(i=2 ; i<number ; i++){
    if(number%i === 0){
        isPrime = false;
        break
    }
}
if(isPrime == true){
    console.log("isprime")
}else{
    console.log("not Prime")
}
