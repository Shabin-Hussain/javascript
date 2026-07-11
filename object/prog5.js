array = [10,20,30,40,30,20,50,30,60,70,10,40,80]
//w.a.p to fnd the number count from the given array and display as an object

arr={}
array.forEach(item=>item in arr?arr[item]+=1:arr[item]=1) 
console.log(arr);

