var longestConsecutive = function(nums) {
    if(nums.length == 0)
    return 0;
  
      nums.sort((a,b) => a-b);
      
      let max = 1;
      let c = 1;
      for(let i=0; i<nums.length; i++){
        
          if(nums[i]-nums[i-1] == 1){
           c++
           max = Math.max(c, max)
          }
          else if(nums[i] == nums[i-1])
          continue;
          else
          c = 1;
          
          
      }
      return max;
  };