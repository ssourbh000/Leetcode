var kthSmallest = function(matrix, k) {
    let arr = matrix.flat();
    arr.sort((a,b) => b-a);

    return arr[arr.length-k];
};