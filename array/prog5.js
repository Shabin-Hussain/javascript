input=[4,5,6]
//output array=[11,10,9]

//sum =15
sum=0
for(let i of input){
    sum=sum+i
}
output=[]
for(num of input){
    output.push(sum-num)
}

console.log(output);
