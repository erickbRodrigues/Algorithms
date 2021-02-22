function fibonnaciRecursiveMemoization() {
    const cache = {}
    return function fib (n) {
        if (n < 2) return n
        if (n in cache) return cache[n]
        console.log('n not found, will add to cache')
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
    }
}

function fibonnaciRecursive(n) {
    if (n < 2) return n

    return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2)
}

function fibonnaciIterative(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    const response = [0, 1]
    for (let i = 2; i < n+1; i++) {
        response.push(response[i-2] + response[i-1])
    }
    return response[n];
}

var memoizedFib = fibonnaciRecursiveMemoization()

console.log('1', memoizedFib(20))
// console.log('2', fibonnaciRecursive(20))
// console.log('3', fibonnaciIterative(20))