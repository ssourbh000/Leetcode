var groupAnagrams = function(strs) {
    let obj = {};
    for(let str of strs){
        let char = str.split('').sort().join('');
        obj[char] ? obj[char].push(str) : obj[char] = [str];
    }
    return Object.values(obj);
};