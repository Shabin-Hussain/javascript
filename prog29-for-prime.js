//w.a.p to check whether the a given number is prime or not
//divisible only by 1 and that number
// 1 and that number excluded because both are factors of every number

num = 9
isPrime = true
for(i=2;i<num;i++){
    if(num%i==0){
       isPrime = false
       break
    }
}
console.log(isPrime?'prime':'not prime');
