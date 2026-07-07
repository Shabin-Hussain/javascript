//w.a.p to check whether the given number is mobile number or not(10 digit)

num = '876543789'
console.log(num.length==10?'its a mobile number':'not a mobile number');

//w.a.p to check the given mail id is gmail.com(@gmail.com)
id = 'raj@gmai.com'
console.log(id.endsWith('@gmail.com')?'yes':'no');

//

const mail = (email)=>{
    return email.endsWith('@gmail.com')?`${email} is a gmail`:`${email} is not a gmail`
}
console.log(mail('abc@gmail.com'));


//w.a.p to check a word starts with the letter q
 word = 'ueen'
 console.log( word.startsWith('q')|| word.startsWith('Q')?'yes':'no');

 //

 const word1 = (char)=>{
    return char.startsWith('q') || char.startsWith('Q') ? `${char} starts with q letter`:`${char} not starts with q letter`
 }
 console.log(word1('queen'));
 
 

