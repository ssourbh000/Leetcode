var equalPairs = function(grid) {
    let rows = []
    let cols = []
    let s = ''
    let count = 0;
    for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
        s += grid[i][j]
      }
      rows.push(s)
      s = ''
    }
    
    for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
        s += grid[j][i]
      }
      cols.push(s)
      s = ''
    }
    
    
    for(let i=0; i<rows.length; i++){
      for(let j=0; j<cols.length; j++){
        if(rows[i] === cols[j])
        count++
      }
    }
    
    console.log(rows);
    console.log(cols);
    
    // for (let row of rows) {
    //   for (let col of cols) {
    //       if (row === col) count++
    //   }
      
      
    
      // const rows = grid.map(arr => arr.join())
      // const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
      // // let count = 0
      // // for (let row of rows) {
      // //     for (let column of columns) {
      // //         if (row === column) count++
      // //     }
      
      // console.log(columns);
      // // }
      return count
  };