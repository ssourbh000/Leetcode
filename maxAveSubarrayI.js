var findMaxAverage = function(nums, k) {
    let sum = 0;
    let i = 0;
    while(i<k){
        sum += nums[i];
        i++
    }
    let maxAv = sum/k;

    for(let i=k; i<nums.length; i++){
        sum += nums[i]-nums[i-k];

        maxAv = Math.max(maxAv, sum/k);
    }

    return maxAv.toFixed(5);
};