//nested array
//[id, name, designation, location, salary, experience]

employee=[
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]

]






//print all employee name
console.log('employee names are:');
employee.forEach(emp => {
    console.log(emp[1]);
    
});


console.log('----------------------------------------------------');


//print total numbers of employee
console.log(`total number of employees is ${employee.length}`);

console.log('----------------------------------------------------');

//print developer employee details
/* develop = */ employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))
/* console.log(develop); */



console.log('----------------------------------------------------');

//print details of employee Laisha
employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro))



console.log('----------------------------------------------------');

//print employee name whose salary is greater than 30000
employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))

console.log('----------------------------------------------------');


//sort employee based on their salary in descending order
//sort((a,b)=>b-a)

c=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(c);


console.log('----------------------------------------------------');

//sort employee based on their experience in ascending order

d=employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(d);

console.log('----------------------------------------------------');

//print employee name who has the highest salary
c=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(c[0][1]);

console.log('----------------------------------------------------');


//print the employee name who has the highest salary
console.log('employee name who has the highest salary is');
empsal = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(empsal[1]);




console.log('----------------------------------------------------');



//print the employee name who has the highest salary
console.log('employee name who has the least salary is');
empsal1 = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(empsal1[1]);




console.log('----------------------------------------------------');


//total salary expense of the company
t = employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(t);

