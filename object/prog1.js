employeeDetails={
    id:1000,
    name:'Neel',
    desg:'developer',
    place:'kochi',
    sal:25000,
    exp:3
}

console.log(employeeDetails);

//display the employee name

console.log(employeeDetails.name);

//or

console.log(employeeDetails["name"]);


for(let key in employeeDetails){
    console.log(key);
    
}

//w.a.p to print yes if gender key is present else print no

if('gender' in employeeDetails){
   console.log('present');
    
    
}
else{
    console.log('not present');
    
}

console.log('gender' in employeeDetails?'present':employeeDetails["gender"]='male');

//how to add a key and value
//Objectname["key"]=value

/* employeeDetails["gender"]='male' */
console.log(employeeDetails);

//update
employeeDetails.exp=5
console.log(employeeDetails);




