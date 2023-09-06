var setZeroes = function(matrix) {
    let row = [];
    let col = [];

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(!matrix[i][j]){
                row.push(i)
                col.push(j)
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        if(row.includes(i)){
            for(j=0; j<matrix[i].length; j++){
                matrix[i][j] = 0;
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(col.includes(j))
            matrix[i][j] = 0
        }
    }
};