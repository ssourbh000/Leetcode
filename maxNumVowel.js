var maxVowels = function(s, k) {
    let vow = 'aeiou';
    let count = 0;
    for(let i=0; i<k; i++){
        if(vow.includes(s[i]))
        count++;
    }
    let max = count;
    for(let i=k; i<s.length; i++){
        if(vow.includes(s[i]))
        count++
        if(vow.includes(s[i-k]))
        count--

        max = Math.max(max,count)
    }

    return max;
};