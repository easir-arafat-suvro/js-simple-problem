// To get the largest number  (with -- Math.max)

function largestNumber(n1, n2, n3) {
    const largest = Math.max(n1, n2, n3);
    return largest;
}

// To get the largest number  (with -- if, else)

function maxNumber(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log('first number is the biggest');
        return n1;
    }
    else if (n2 > n1 && n2 > n3) {
        console.log('second number is the biggest');
        return n2;
    }
    else {
        console.log('third number is the biggest')
        return n3;
    }
}



var firstInput = 100;
var secondInput = 552;
var thirdInput = 333;

var maxNum = largestNumber(firstInput, secondInput, thirdInput);
console.log(maxNum);


var maxNum2 = maxNumber(firstInput, secondInput, thirdInput);
console.log(maxNum2);



