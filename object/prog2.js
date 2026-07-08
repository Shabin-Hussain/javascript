//array
//
//[id, name, designation, location, salary, experience]
arr=[1000,'Neel','developer','kochi',25000,3]
employee={
    id:1000,
    name:'neel',
    desg:'developer'
}

console.log(typeof(arr));
console.log(typeof(employee));
console.log(arr[2]);
//different methods to access values stored in a key
console.log(employee['desg']);
console.log(employee.name);



//how to access key from an object

//in is used to follow the keys in the object

console.log('---------------------------------');

for(let key in employee){
    console.log(key);
    
}

console.log('---------------------------------');

//w.a.p to check whether 'emplocation' key is present in the given object
console.log(`emplocation is ${('emplocation' in employee)?'present':'not present'}`)

console.log('---------------------------------');

//how to add key value pair to an object
//objectName["key"]=value

employee['experience']=3
console.log(employee);

console.log('---------------------------------');





