// Memoizer
const memoize = () => {
 
    // Create cache for results
    // Empty objects
    const results = {};
 
    // Return function which takes any number of arguments
    return (...args) => {
        // Create key for arguement cache
        const argsKey = JSON.stringify(args);
 
        // Only execute function if no cached value found.
        // If results object does not have anything to argsKey position.
        if (!results[argsKey]) {
            results[argsKey] = func(...args)
        }
        return results[argsKey];
    };
};
 
// Wrapping memoization function
const multiplySquareToNumber = memoize((num1, num2) => {
    let total = 0;
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num1; j++) {
            // Calculating square
            total += 1 *;
        }
    }
    // Multiplying square with num2
    return total * num2;
});
 
console.log(multiplySquareToNumber(50, 500));
