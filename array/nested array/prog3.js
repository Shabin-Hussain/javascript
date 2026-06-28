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
for(let n of employee){
    console.log(n[1]);
    
}


console.log('----------------------------------------------------');


//print total numbers of employee
console.log(`total number of employees is ${employee.length}`);

console.log('----------------------------------------------------');

//print developer employee details
for(let n of employee){
    if(n[2]=='developer'){
        console.log(n);
        
    }
    
}

console.log('----------------------------------------------------');

//print details of employee Laisha
for(let n of employee){
    if(n[1]=='Laisha'){
        console.log(n);
        
    }
    
}

console.log('----------------------------------------------------');

//print employee name whose salary is greater than 30000
for(let n of employee){
    if(n[4]>30000){
        console.log(n[1]);
        
    }
}

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