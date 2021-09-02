const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'D', 'I', 'A', 'Z', 'E'];


// Use of "for ( -- of --)" loop, used only when array in use,

function removeDuplicate(names) {
    let unique = [];
    for (const elements of names) {
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
    }
    return unique;
}

const singleElement = removeDuplicate(names);

console.log(singleElement);



// Use for loop ---,

