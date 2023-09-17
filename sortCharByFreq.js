var frequencySort = function(s) {
    let obj = {};
    for(let i=0; i<s.length; i++){
        obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
    }

    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);


    let resultString = '';
    for (const [char, count] of arr) {
        resultString += char.repeat(count);
    }

    return resultString;
};