const firstFactorial = num => {
    factorial = n => {
        if (n === 0) return 1;
        return factorial(n - 1) * n;
    }
    return factorial(num)
}

console.log(firstFactorial(24))

