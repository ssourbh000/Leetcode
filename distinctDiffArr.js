var distinctDifferenceArray = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        let pre, suf;
        if(i == 0){
            pre = 1;
            suf = [...new Set(nums.slice(1))].length;
            arr.push(pre-suf);
        }else if(i == nums.length-1){
            pre = [...new Set(nums.slice(0))].length;
            suf = 0;
            arr.push(pre-suf);
        }else{
            pre = [...new Set(nums.slice(0, i+1))].length;
            suf = [...new Set(nums.slice(i+1))].length;
            arr.push(pre-suf);
        }
    }
    return arr;
};