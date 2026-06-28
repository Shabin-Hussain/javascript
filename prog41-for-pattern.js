//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *

for(row=1;row<=5;row++){
    str=" "
    for(spa=5;spa>row;spa--){
        str = str + " "
    }
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}
for(row=4;row>=1;row--){
    str=" "
    for(spa=5;spa>row;spa--){
        str = str + " "
    }
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}