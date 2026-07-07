str ='Good morning all'
//w.a.p to print all the vowels in the given string
//vowel - a,e,i,o,u

vowels =['a','e','i','o','u','A','E','I','O','U']

/* character = str.split('')
console.log(character);

for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
        
    }
} */

Array.from(str).filter(item=>vowels.includes(item)).forEach(char=>console.log(char))
