var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let longestStr = 0;
    let set = new Set();

    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            longestStr = Math.max(longestStr, set.size);
            right++;
        }else{
            set.delete(s[left]);
            left++;
        }
    }

    return longestStr;
};


console.log(lengthOfLongestSubstring("abcabcbb"));

// let maxLength = 0,
//   left = 0,
//   chars = new Set();

//   for (let i = 0; i < s.length; i++) {
//     while (chars.has(s[i])) {
//       chars.delete(s[left]);
//       left++;
//     }

//     chars.add(s[i]);
//     maxLength = Math.max(maxLength, chars.size);
//   }

//   return maxLength;