pattern='ABCBBCAACB'
//w.a.p to find the first recursive letter - B
character= Array.from(pattern)
obj={}
for(char of character){
    if(char in obj){
        console.log(char);
        
        break
    }
    else{
        obj[char]=1
    }
}
