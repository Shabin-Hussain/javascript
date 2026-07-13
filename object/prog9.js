accounts=[
    {acno:1000,ac_type:'savings',balance:45000,transaction:[
        {
            to:1001,amount:5000,msg:'ebili',mode:'gpay'
        },
        {
            to:1002,amount:2000,msg:'emi',mode:'neft'
        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonePay'
        }
    ]},
    {acno:1001,ac_type:'current',balance:30000,transaction:[
        {
            to:1000,amount:1000,msg:'grossary',mode:'gpay'
        },
        {
            to:1002,amount:7000,msg:'gift',mode:'phonePay'
        },
        {
            to:1003,amount:10000,msg:'emi',mode:'neft'
        }
    ]},
    {acno:1002,ac_type:'fixed',balance:100000,transaction:[
        {
            to:1000,amount:5000,msg:'ebili',mode:'gpay'
        },
        {
            to:1001,amount:2000,msg:'emi',mode:'neft'
        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonePay'
        }
    ]},
    {acno:1003,ac_type:'savings',balance:30000,transaction:[
        {
            to:1001,amount:5000,msg:'ebili',mode:'gpay'
        },
        {
            to:1002,amount:2000,msg:'emi',mode:'neft'
        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonePay'
        }
    ]}
]



//1.total number of accounts

console.log('total number of accounts');
console.log(accounts.length);

console.log('------------------------------------------------------------------');


//2.print account number whose ac_type is savings
console.log('account number whose ac_type is savings');
accounts.filter(item=>item.ac_type=='savings').forEach(elem=>console.log(elem.acno))


console.log('------------------------------------------------------------------');

//3.print the balance of account number 1000
console.log('the balance of account number 1000');
bal=accounts.find(item=>item.acno=1000)
console.log(bal.balance);

//or
console.log(accounts.find(item=>item.acno=1000).balance);


console.log('------------------------------------------------------------------');
//4.print all gpay transactions
console.log('all gpay transactions');
accounts.map(item=>item.transaction).flat().filter(elem=>elem.mode=='gpay').forEach(item1=>console.log(item1))

console.log('------------------------------------------------------------------');
//5.print all transaction whose amount>5000
console.log('all transaction whose amount>5000');
accounts.map(item=>item.transaction).flat().filter(item1=>item1.amount>5000).forEach((item2)=>console.log(item2))

console.log('------------------------------------------------------------------');

//6.print credit transaction of account 1002
console.log('credit transaction of account 1002');
crd =accounts.map(item=>item.transaction).flat().filter(item1=>item1.to==1002)
console.log(crd);



console.log('------------------------------------------------------------------');
//7.print debit transaction of account 1002
console.log('debit transaction of account 1002');
accounts.filter(item=>item.acno==1002).map(item2=>item2.transaction).flat().forEach(item3=>console.log(item3))

//or
//follow this
dbt = accounts.find(item=>item.acno==1002).transaction
console.log(dbt);


console.log('------------------------------------------------------------------');

//8.print transaction history of 1002
history={}
history['credit']= crd
history['debit']= dbt
console.log(history);

console.log('------------------------------------------------------------------');
//spread(...) -- to combine two arrays into a single array---this is an array operator
history1=[...crd,...dbt]
console.log(history1);


console.log('------------------------------------------------------------------');


//9.print highest balance account details
console.log('highest balance account details');
high=accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(high);



console.log('------------------------------------------------------------------');