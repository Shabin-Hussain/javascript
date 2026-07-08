str = 'malayalam'
start = 0
end = str.length-1
isPalindrome= true
while(start<end){
    if(str[start]!=str[end]){
        isPalindrome=false
    }
    start++
    end--
}
console.log(isPalindrome?'palindrome':'not palindrome');

//another - for
pal =''
for(i=str.length-1;i>=0;i--){
    pal += str[i]
}
console.log(str==pal?'palindrome':'not palindrome');

