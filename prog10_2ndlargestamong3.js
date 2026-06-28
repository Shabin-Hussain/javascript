//w.a.p to find the second largest among 3 nos and arrange them in descending order

n1 = 500
n2 = 200
n3 = 300

if(n1>n2){
    if(n2>n3){
        console.log(`second largest number is ${n2}`);
        console.log(`the descending order is ${n1} , ${n2} ,  ${n3}`);
        
        
    }
    else{
        console.log(`second largest number is ${n3}`);
        console.log(`the descending order is ${n1} , ${n3} ,  ${n2}`);
    }
}

else if(n2>n1){
     if(n1>n3){
        console.log(`second largest number is ${n1}`);
        console.log(`the descending order is ${n2} , ${n1} ,  ${n3}`);
        
        
    }
    else{
        console.log(`second largest number is ${n3}`);
        console.log(`the descending order is ${n2} , ${n3} ,  ${n1}`);
    }
}

else if(n3>n1){
     if(n1>n2){
        console.log(`second largest number is ${n1}`);
        console.log(`the descending order is ${n3} , ${n1} ,  ${n2}`);
        
        
    }
    else{
        console.log(`second largest number is ${n2}`);
        console.log(`the descending order is ${n3} , ${n2} ,  ${n1}`);
    }
}

else{
    console.log(`all numbers are equal`);
    
}

