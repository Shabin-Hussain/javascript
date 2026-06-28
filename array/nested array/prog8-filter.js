//filter()

a=[10,12,15,13,25,2,3,5]

//w.a.p to print all even numbers from a given array
even = a.filter(n1=>n1%2==0)
console.log(even);

//w.a.p to print all numbers >13 from the given array
num = a.filter(n1=>n1>13)
console.log(num);


//w.a.p to check is there any number >13 exists in the given rray
exist = a.filter(num=>num>13?'exist':'not exist')
console.log(exist);

