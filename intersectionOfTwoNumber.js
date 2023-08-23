var intersection = function(nums1, nums2) {
    let arr1 = Array.from(new Set(nums1));
    let arr2 = Array.from(new Set(nums2));
    let arr=[];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]))
        arr.push(arr1[i]);
    }
    return arr;
};

let n1 = [1,2,2,1];
let n2 = [2,2];

console.log(intersection(n1, n2));