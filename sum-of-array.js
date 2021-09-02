// if want to sum an aray using loop , we have to hold the previous summation number within a variable so, variable should be decleared outside of the loop.

const number = [10, 20, 30, 40, 50]

// sum with for loop ---

let sum = 0;

for (i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
}

console.log(sum);


// declear a function for sum of array ---

function sumOfArray() {
    let sum = 0;
    for (i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}

const arrayTotal = sumOfArray([number]);

console.log(arrayTotal);