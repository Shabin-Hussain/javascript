class Student{

    //constructor
    //constructor invokes automatically
    constructor(id,name,mark){
        this.stid=id,
        this.stname=name,
        this.stmark=mark
        this.studentDisplay()
    }
    //method
    studentDisplay(){
        console.log(`student details id is ${this.stid}, name is ${this.stname} and mark is ${this.stmark}`);
        
    }
}

const st1 = new Student(1,'manu',100)
const st2 = new Student(2,'anu',90)