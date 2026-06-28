//w.a.p to check whether the given number is armstrong or not
//153 = 1**3 + 5**3 + 3**3
//1634 = 1**4 + 6**4 +3**4 + 4**4

num = 153
power = (num+'').length
temp = num
remainder = 0
sum = 0
while (num>0) {
    remainder = num %10
    sum = sum + remainder **power
    num = Math.floor(num/10)
}

if (sum == temp) {
    console.log(`the number is armstrong`);
    
} else {
       console.log(`the number is not armstrong`);
}