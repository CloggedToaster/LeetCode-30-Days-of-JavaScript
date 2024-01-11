/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let arrayLength = functions.length
    if(arrayLength==0){
        return function(x){ 
            return x
            }
    } else {
        return function(x){
            for(let i = arrayLength - 1; i >= 0; i--){
                x = functions[i](x)
            }
            return x
        }
    }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */