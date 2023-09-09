var sortColors = function(nums) {
  
    function sort(a){
        for(let i=0; i<nums.length; i++){
            if(a === nums[i]){
                nums.push(nums.splice(i,1))
                i--
            }
        }
    }
    sort(0)
    sort(1)
    sort(2)  
};