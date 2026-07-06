//[ no, districts, +ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]

covid_data = [
     [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
     [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
     [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
     [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
     [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
     [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
     [7, 'kottayam', 27000, 1500, 27000, 14000, 1000],
     [8, 'kollam', 14000, 2500, 25000, 18000, 2700]
    
]

//1. district having Highest +ve case
console.log('district having Highest +ve case');
highest = covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(highest[1]);

console.log('------------------------------------------------------');




//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');
highest1 = covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
console.log(highest1[1]);


console.log('------------------------------------------------------');

//3. district having lowest death rate
console.log('district having lowest death rate');
lowest = covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
console.log(lowest[1]);



console.log('------------------------------------------------------');

//4. sort data with +ve case in descending order
 covid_data.sort((a,b)=>b[2]-a[2]).forEach(it=>console.log(it[1]))
 
 
console.log('------------------------------------------------------');
//5. is district with +ve cases > 15000
d = covid_data.some(dis=>dis[2]>15000)
console.log(d?'yes':'no');

console.log('------------------------------------------------------');


//6. sort data with 1st dose vaccine ascending order
covid_data.sort((a,b)=>a[5]-b[5]).forEach(it=>console.log(it[1]))



console.log('------------------------------------------------------');
//7. Print Thrissur details
p= covid_data.find(data=>data[1]=='Thrissur')
console.log(p);

console.log('------------------------------------------------------');
//8. print total number of positive cases
console.log('total number of positive cases');

post = covid_data.map(nn1=>nn1[2]).reduce((n1,n2)=>n1+n2)
console.log(post);

console.log('------------------------------------------------------');
//9. print total number of curred cases
console.log('print total number of curred cases');

crd = covid_data.map(nn1=>nn1[4]).reduce((n1,n2)=>n1+n2)
console.log(crd);

console.log('------------------------------------------------------');

//10. print curred cases in Idukki
console.log('print curred cases in Idukki');
curr = covid_data.find(cr=>cr[1]=='Idukki')
console.log(curr[4]);

