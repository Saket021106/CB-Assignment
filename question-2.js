function memoizedFibonacci() {
    let cache = {};
    
    function fib(n) {
        if (n <= 1) return n;
        if (cache[n]) return cache[n];
        
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    
    return fib;
}

// Testing memoized Fibonacci
const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
console.log(fibonacci(30)); // Output: 832040