//student

class Student {
   //property
   stdname
   rollno
   age
   //constructor
   constructor(sname,roll,ag) {
    this.stdname=sname,
    this.rollno=roll,
    this.age=ag
   }

   //method
   display(){
    console.log(`student name is ${this.stdname}`);
    
   }
}


//object
const obj = new Student('Raj', 20, 16)
obj.display()

const obj1 = new Student('Paul', 25, 10)
obj1.display()