/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let numLength = nums.length
    if(numLength==0){ return init }
    let output
    for(var i=0; i<nums.length; i++){
        if(i==0){
            output = fn(init,nums[i])
        } else {
            output = fn(output, nums[i])
        }
    }
    return output;
};