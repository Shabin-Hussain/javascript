//array
//
//[id, name, designation, location, salary, experience]
arr=[1000,'Neel','developer','kochi',25000,3]
employee={
    id:1000,
    name:'neel',
    desg:'developer',
    age:35
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

//check 'gender' key in the given employee. if present print 'yes' else add gender key to the given object with value as male



'gender' in employee?console.log('yes'):(employee.gender='male',console.log(employee))

console.log('---------------------------------');

//update age=40
employee.age+=5
console.log(employee);

console.log('---------------------------------');

//delete a key from an object

//delete method - return boolean value
delete employee.age
console.log(employee);

//hw.sudent object - get, add , update, delete

student = {
    name:'raj',
    roll_no:42,
    class:10

}

console.log(student);


console.log('----------------------------------------------------------------------------------------');


student.section=2
console.log(student);

console.log('----------------------------------------------------------------------------------------');

student.roll_no=50
console.log(student);

console.log('----------------------------------------------------------------------------------------');

delete student.class
console.log(student);

console.log('----------------------------------------------------------------------------------------');




   




