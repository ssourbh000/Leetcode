var largestNumber = function(nums) {
    nums.sort((a,b)=> `${b}${a}`-`${a}${b}`);
    return nums[0] == 0 ? '0' : nums.join('');
};

// var largestNumber = function(nums) {
//     nums.sort((a, b) => `${b}${a}`-`${a}${b}`);
//     return nums[0] == 0 ? '0' : nums.join('');
// };

console.log(largestNumber([3,30,34,5,9]));