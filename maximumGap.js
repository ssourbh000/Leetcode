var maximumGap = function(nums) {
    if(nums.length < 2)
    return 0

    nums.sort((a,b) => a-b)
    
    let max = 0;
    for(let i=1; i<nums.length; i++){
        max = Math.max(max, nums[i]-nums[i-1])
    }

    return max
};