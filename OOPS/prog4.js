//write methods for solving the given qustions 
//not using constructor
 
class Bank{
    //property
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }

    //methods

    //validate a given account number
     validate(acno){
       //acno in this.accountDetails?console.log('Validated'):console.log('Not validated');//this case return is not needed
       return acno in this.accountDetails?'Validated':'Not validated'
       
     }


    //authenticate the account
    authenticate(acno,password){
        
    }

    //checkthe balance

    //fund transfer
}

const obj =new Bank()
console.log(obj.validate(1003));

