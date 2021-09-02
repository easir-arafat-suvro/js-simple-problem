//fibonacci serise :
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....... ]
/*
2th = 1th + 0th;
3th = 2th + 1th;
4th = 3th + 2th;
5th = 4th + 3th;
nth = (n-1)th - (n-2)th;
ith = (i-1)th - (i-2)th;
*/

// fibonacci serise using for loop

/* const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
} */

// console.log(fibo);

//---------------//

// fibonacci serise using for loop within function

/* function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var fiboSeries = fibonacciSeries(7);
console.log(fiboSeries); */

// Note : this function can't handel input type of - string, boolean' negative number.

// ------------- //

// fibonacci serise using for loop within function (control - input type)

/* function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    }
    else if (num < 0) {
        return 'please input a positive number'
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var fiboSeries = fibonacciSeries(7);
console.log(fiboSeries); */


// ------------- //


// Fibonacci Element and series Recursive way -- --

// Fibonacci Element (Nth Sereise) --

/* function fiboN(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fiboN(n - 1) + fiboN(n - 2);
}

var fibonacciNth = fiboN(5);
console.log(fibonacciNth) */

// ------------- //

// Fibonacci series Recursive way --


function fibonSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const getFibonSerise = fibonSeries(17);
console.log(getFibonSerise);