a = [10, 20, 30, 20, 30, 40, 50, 60, 10]
//w.a.p to find duplicate number from the given array = 10,20,30

/* isDuplication = false
for (i = 0; i <= a.length - 1; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] == a[j]) {
            isDuplication = true
            console.log(a[i]);

        }
    }

}

!isDuplication && console.log('no duplication'); */

//truthy operator &&


b = []
/* isDuplication = false */
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
          /*   isDuplication = true */
            //variable initialization
            isDuplicate = false
            //checking whether the number is present in the output array
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){
                  isDuplicate = true
                  break
                }
            }
            if(!isDuplicate){//not present in the output array, the number is added to the output array
                b.push(a[i])

            }
        }
    }
}

/* isDuplication?console.log(b):console.log('no duplication') */

b.length==0?console.log('no duplication'):console.log(b);


console.log('-------------------------------------------------------------------------------');

c = []
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j] && !c.includes(a[i])){
             c.push(a[i])
             break
        }
    }
}

console.log(c);







