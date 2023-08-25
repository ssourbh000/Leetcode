var romanToInt = function(s) {
    var rom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let val = 0;

    for(let i=0; i<s.length; i++){
        if(rom[s[i]]<rom[s[i+1]])
        val -= rom[s[i]];
        else
        val += rom[s[i]];
    }

    return val;
};

console.log(romanToInt('CMXCVIII'));