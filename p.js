var isPalindrome = function(x) {
let rev=0;
let num=x;
let digit=0
    while(x>0){
        digit=x%10;
        rev=rev*10+digit;
        x=Math.floor(x/10);
    }

    if(rev==num){
        return rev;

    }
    else{
        return rev;
    }
    
};


console.log(isPalindrome(10));