class A{
    methoda(){
        console.log('inside the first method');
        
    }
}

class B extends A {
     methoda(){
        console.log('inside the second method');
        
    }
     methoda(){
        console.log('inside the third method');
        
    }
}

const obj = new B()
obj.methoda()

//the most latest method will only get executed