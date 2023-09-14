var searchMatrix = function(matrix, t) {
    for(let i=0; i<matrix.length; i++){
        if(matrix[i][0] <= t && matrix[i][matrix[i].length-1] >= t){
            for(let j=0; j<matrix[i].length; j++){
                if(matrix[i][j] == t)
                return true;
            }
        }
    }
    return false;
};