// 22_5-1 Understand recursion is nothing but a simple for loop


// 6+5+4+3+2+1

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum = sum(i - 1) + i;
}

const iterator = sum(3);
console.log(iterator);