exports.AddMatrix = function (A,B){
    C = [,];
  
    rowQuantity = A.length;
    columnQuantity = A[0].length;
  
    for(rowIdx = 0; rowIdx < rowQuantity; rowIdx++){
      C[rowIdx] = [];
      for(columnIdx = 0; columnIdx < columnQuantity; columnIdx++){
        C[rowIdx][columnIdx] = A[rowIdx][columnIdx] + B[rowIdx][columnIdx];
      }
    }
  
    return C;
  }