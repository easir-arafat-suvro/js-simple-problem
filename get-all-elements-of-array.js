// --- TO GET ALL ELEMENTS WITHIN ARRAY --- //

var array = ['a', 'gfg', 'c', 'n', 20, 100];
var s = array.values();     // Here array.values() function is called (inbuild-js).

// Here all the elements of the array is being printed.
for (let elements of s) {
    console.log(elements);
}

/*  output:
a
gfg
c
n
20
100 */

// ----------- //


var array = ['a', 'gfg', 'c', 'n', 20, 100];
// Here all the elements of the array is being printed.
for (let elements of array) {
    console.log(elements);
}


// --------- //


const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'may cat name is ' + [];

for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ', ';
    // console.log(info);
}

console.log(info);

/*
Output : may cat name is Bill, Jeff, Pete, Biggles, Jasmin,
*/