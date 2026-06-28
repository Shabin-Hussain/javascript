//w.a.p to find reverse of a given number using while loop

num = 123
remainder = 0
reverse = 0
console.log(`the given number is ${num}`);

while (num>0) {
    remainder = num%10
    reverse = (reverse*10)+remainder
    num = Math.floor(num/10)
}
console.log(`the reversed number is ${reverse}`);


