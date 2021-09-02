// --- find the largest number within an array ---

// if the array elements are only positive than applied

let ages = [11, 201, 23, 56, 600];

function largestNumber(ages) {
    let largest = 0;
    for (let i = 0; i < ages.length; i++) {
        var elements = ages[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

let getLargestAge = largestNumber(ages);

console.log(getLargestAge);

console.log('-------------------');


// for both positive & negative array element are applied

ages = [11, 201, 23, 56, 600];

function largestNumber(ages) {
    let largest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        var elements = ages[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

let getLargestAge1 = largestNumber(ages);
let oldest = largestNumber([-10, -5, -50]);

console.log(getLargestAge1, oldest);


