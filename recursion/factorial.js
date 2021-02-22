function findFactorialRecursive(number) {
    if (number === 2) return 2

    return number * findFactorialRecursive(number-1)
}

function findFactorialIterative(number) {
    if (number === 2) return 2
    let response = 1;
    for(let i = 2; i <= number; i++) {
        response = response * i
    }
    return response;
}

console.log(
    findFactorialIterative(5),
    findFactorialRecursive(5)
)