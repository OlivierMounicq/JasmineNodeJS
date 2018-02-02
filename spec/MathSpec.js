var math = require("../app/Math");

describe("TestHopfieldFramework",function(){

    // *****************************************************************
    // Add two matrix
    // *****************************************************************
    it("Add two matrix", function(){  
        var A = [[1, 2],
                [3, 4]];

        var B = [[5, 6],
                [7, 8]];
        
        var C = [[6,  8],
                [10, 12]];        
   
        var expectedM = math.AddMatrix(A,B);
       
        expect(expectedM).toEqual(C);
    });
});    