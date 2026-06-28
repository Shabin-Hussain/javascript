//callback functions

function greet(name, callback){
    console.log(`hai ${name}`);
    callback()
    
}

function callme() {
    console.log(`i am a callback function`);
    
}

greet('peter',callme)



//eg:2

setTimeout(()=>
    {console.log('hello');
},5000)