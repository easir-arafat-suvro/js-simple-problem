
// 2_5-2 Explore Factorial Recursion using a for loop concept

// 6! = 6*5*4*3*2*1

function factorial(i) {
    if (i == 1) { // loop stop condition !!!
        return 1;
    }
    return i * factorial(i - 1);
}

/*
    i * factorial(i - 1);
=  6 * factorial(6 - 1); // call the function for i=6;
=  6 * factorial(5); // call the function for i=5;
=  6 * 5 * factorial(4); // call the function for i=4;
=  6 * 5 * 4 * factorial(3); // call the function for i=3;
=  6 * 5 * 4 * 3 * factorial(2); // call the function for i=2;
=  6 * 5 * 4 * 3 * 2 * factorial(1); // stop condition;
=  6 * 5 * 4 * 3 * 2 * 1; 
*/

console.log(factorial(6));