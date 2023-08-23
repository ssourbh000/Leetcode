var findDuplicate = function(nums) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            return nums[i];
        }else
        obj[nums[i]]=1;
    }
};

let arr = [1,3,4,2,2];

console.log(findDuplicate(arr));