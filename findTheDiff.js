var findTheDifference = function(s, t) {
    if(s.length < 1)
    return t[0];
    
    s1 = s.split('');
    t1 = t.split('');

    for(let i=0; i<s1.length; i++){
        if(t1.includes(s1[i]))
        t1.splice(t1.indexOf(s1[i]), 1);
    }
    return t1[0];
};

console.log(findTheDifference('a', 'aa'));