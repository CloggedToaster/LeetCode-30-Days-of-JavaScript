/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];
    let temporaryArray = [];
    let sizeIndex = 0;
    for(elementIndex in arr){
        temporaryArray.push(arr[elementIndex]);
        sizeIndex++;
        if(sizeIndex == size || elementIndex == arr.length - 1){
            chunkedArray.push(temporaryArray);
            temporaryArray = [];
            sizeIndex = 0;
        }
    }
    return chunkedArray;
};
