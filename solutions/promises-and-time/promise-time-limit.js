/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    const timeoutDuration = t;
    
    return async function(...args) {
        
        const functionCall = fn(...args);
        const timeout = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, timeoutDuration);
        });
        return Promise.race([functionCall, timeout]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */