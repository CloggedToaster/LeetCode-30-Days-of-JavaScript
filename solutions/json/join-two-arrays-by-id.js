/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let output = {};
    for(let i = 0; i < arr1.length; i++){
        output[arr1[i].id] = arr1[i];
    }
    for(let key in arr2) {

        if(output[arr2[key].id]){
            for(let value in arr2[key]){
                output[arr2[key].id][value] = arr2[key][value];
            }
        } else {
            output[arr2[key].id] = arr2[key];
        }   
    }
    return Object.values(output);
};