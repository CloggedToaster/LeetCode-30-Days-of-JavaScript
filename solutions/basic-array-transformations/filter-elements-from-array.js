/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let numTruthy=0
    const filteredArray = new Array()
    for(var i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArray[numTruthy]=arr[i]
            numTruthy++
        }
    }
    return filteredArray
};