// for both positive & negative array element are applied

ages = [11, 201, 23, 6, 600];

function lowestNumber(ages) {
    let lowest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        var elements = ages[i];
        if (elements < lowest) {
            lowest = elements;
        }
    }
    return lowest;
}

let getLowestAge1 = lowestNumber(ages);
let oldest = lowestNumber([-10, -5, -50]);

console.log(getLowestAge1, oldest);