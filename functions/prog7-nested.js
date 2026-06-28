//nested function    //closure property

//global can be accessed from anywhere

const global = 'global'

const parent = ()=>{
    let parentVariable = 'PARENT'
    console.log(`parent variable is ${parentVariable}`);
    /* cannot be accessed inside parent */
   /* console.log(`child variable is ${childVariable}`); */
      console.log(`global variable is ${global}`);

    const child = ()=>{
        let childVariable = 'CHILD'
        console.log(`child variable is ${childVariable}`);
        /* can be accessed insider child */
         console.log(`parent variable is ${parentVariable}`);
          console.log(`global variable is ${global}`);
    }
    child()
    
}

parent()