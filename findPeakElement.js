var findPeakElement = function(nums) {
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
            return i;
        }
    }
    return nums.length-1;
};

console.log(findPeakElement([1,2]));