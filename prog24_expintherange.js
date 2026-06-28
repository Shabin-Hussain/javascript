//w.a.p to display numbers whose exponential is in the range of 8-36, where user can input power value
//power=2 1 4 9 16 25 36 49  =3,4,5,6
//power=3 1,8,27 = 2,3

power = 2
low = 8
up = 36
num = 1

while (num<=36) {
    
    if (low<=num**power && num**power<=up) {
        console.log(num);
        
    }

    num++
}
