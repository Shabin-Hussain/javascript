arr=[10,11,12,3,2,4]
//w.a.p to check whether 2 is present or not
searchItem=2
count =0 //inorder to check number of iterations comparing to binary search
isPresent = false
for(let num of arr){
    count++
    if(num==2){
        isPresent = true
        break
        
    }
    
}
console.log(isPresent?'present':'not present');
console.log(count);


