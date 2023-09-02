var maxProduct = function(nums) {
    let preMax = preMin = max = nums[0];

    for(let i=1; i<nums.length; i++){
        let currMax = Math.max(nums[i]*preMax, nums[i], nums[i]*preMin);
        let currMin = Math.min(nums[i]*preMax, nums[i], nums[i]*preMin);

        preMax = currMax;
        preMin = currMin;

        max = Math.max(max, currMax);
    }
    return max;
};