//w.a.p to check whether the given number is palindrome or not
num = 121
temp = num
remainder = 0
reverse = 0
while (num>0) {
    remainder = num%10
    reverse = (reverse*10) + remainder
    num = Math.floor(num/10)
}

/* if (reverse == temp) {
    console.log(`this ${temp} is palindrome`);
    
} else {
    console.log(`this ${temp} is not a palindrome`);
    
} */

reverse==temp? console.log(`this ${temp} is palindrome`): console.log(`this ${temp} is not a palindrome`)