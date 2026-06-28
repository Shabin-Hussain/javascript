//w.a.p to print all armstrong numbers between 8 to 500


for(num=8;num<=500;num++){
    power = (num+ "").length
    temp = num
    sum = 0
    remainder = 0
    if(power!=1){
        while (temp>0) {
              remainder = temp %10
              sum = sum + remainder **power
              temp = Math.floor(temp/10)
        }
    }
    else{
        sum = 0
    }

    if(sum == num){
        console.log(sum);
        
    }
}

