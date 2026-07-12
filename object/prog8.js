products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1.print product name only
products.forEach(pro1=>console.log(pro1.pName))


console.log('----------------------------------------------------');



//2.print all mobile details whose display is lcd
products.filter(pro=>pro.display=='lcd').forEach(pro1=>console.log(pro1['pName']))

console.log('----------------------------------------------------');

//3.print 5g mobile phone name
for(data of products){
    if(data.band=='5g'){
        console.log(data.pName);
        
    }
}

console.log('==========================');


products.filter(pro=>pro.band=='5g').forEach(pro1=>console.log(pro1['pName']))

console.log('----------------------------------------------------');

//4.sort mobile based on price
srt=products.sort((a,b)=>a['price']-b['price'])
console.log(srt);

console.log('----------------------------------------------------');

//5.print costly mobile
cst=products.reduce((item1,item2)=>item1.price>item2.price?item1:item2)
console.log(cst.pName);

console.log('----------------------------------------------------');


//6.print low cost mobile
rst=products.reduce((item1,item2)=>item1.price<item2.price?item1:item2)
console.log(rst.pName);