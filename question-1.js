function createCounter() {
    let count = 0; //The variable count is defined inside createCounter() and is not exposed outside, ensuring it remains private.

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
        //The returned object (increment, decrement, getCount) forms a closure over count, allowing it to persist across function calls.
    };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
console.log(counter.getCount()); // Output: 1
