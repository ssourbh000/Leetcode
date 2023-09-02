var firstMissingPositive = function(nums) {
    nums.sort((a,b) => a-b)
    let num = 1;
    for(let i=0; i<nums.length; i++){
        if(num === nums[i])
        num++
    }
    return num;
};