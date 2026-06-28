a=[10,11,12,13,14,15]
//w.a.p to find square of each element in the given array

sq=a.map(num=>num**2)
console.log(sq);

for(let num of a ){
    console.log(num**2);
    
}

//forEach
a.forEach(num => {
   console.log(num**2);
    
});

//w.a.p to find the cube of a given number using map
//w.a.ap to create a new array with number<=13 increment by 1 and number>13 decrement by 1
//op = [11,12,13,14,13,14]
