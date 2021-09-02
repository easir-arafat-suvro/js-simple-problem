// 21-3 Explore string nature and reverse a string


let text = 'Hello World';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(text);
console.log(reversed);