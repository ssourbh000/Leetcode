var calculate = function(s) {
    let sign = 1, sum = 0;
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            let num = 0;
            while(s[i] >= '0' && s[i] <= '9'){
                num = (num*10) + (s[i]-'0');
                i++;
            }
            sum += (num*sign);
            --i
        }else if(s[i] === '+')
        sign = 1;
        else if(s[i] === '-')
        sign = -1;
        else if(s[i] === '('){
            stack.push(sum)
            stack.push(sign)
            sum = 0
            sign = 1
        }else if(s[i] === ')'){
            sum = stack.pop()*sum;
            sum += stack.pop();
        }
    }
    return sum;
};