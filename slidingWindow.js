// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the 
// function.

// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but 
// [100, 300] is not.
                                           
// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

//Problem:
    // There is an array, I want to find the sub array based on k that is the greatest of
    // the array
    //Examples: [1,3,5,1,9,4] k = 2 -> 13
    //Edge Case: will there ever be an empty array, will k ever be 0 , what if k is larger 
    //than length
    // Data Structure: arr


function maxSubarraySum (arr, subarray) {

    
    //Algorithm: 

    //start position in the window: 0
    let start = 0;
    // window size: subArray
    let windowSize = subarray
    //arrayLength
    const arrayLength = arr.length;

    //If the subArray is greater than the length of the array, return null;

    if(windowSize > arrayLength || arrayLength === 0) {
        return null;
    }

    //continuously update the max sum 
    let max =  -Infinity

    //while loops start less than array length 
    while(start <= arrayLength) {
        // get the sum subArrray .slice(start, window)
        const sum = arr.slice(start, windowSize).reduce((a,b) => a + b, 0);
        //if max is less than sum update max to sum
        if(max < sum) {
            //update the max 
            max = sum;
        }

         //add to start++
        start++;
        //add to windowSize++
        windowSize++;

    }
    
    
    
   
    

    return max;


}

console.log('maxSubarraySum:', maxSubarraySum([2,3], 3));