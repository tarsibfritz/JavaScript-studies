// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
    // Ensure `a` is the smaller and `b` is the larger value
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    // Use a loop to calculate the sum of all integers between `min` and `max`
    let totalSum = 0;
    for (let i = min; i <= max; i++) {
        totalSum += i;
    }

    return totalSum;
}

console.log(getSum(0, 4));