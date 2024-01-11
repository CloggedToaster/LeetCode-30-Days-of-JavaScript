/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const output = new Array(arr.length)
    for(var i=0; i<arr.length; i++){
        output[i]=fn(arr[i],i)
    }
    return output; 
};