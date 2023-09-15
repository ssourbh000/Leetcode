var commonChars = function(words) {
    let arr = [];

    for(let w of words[0]){
        if(words.every(word => word.includes(w))){
            arr.push(w);
            words = words.map(word => word.replace(w, ''));
        }
    }

    return arr;
};