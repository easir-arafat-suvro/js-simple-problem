// 21-8 Calculate the total cost of the products in a shopping cart


const products = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'iPhone', price: 55000, quantity: 1 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'shirt', price: 500, quantity: 8 }
];

/*
// Only single quantity.
 
let productsPrice = 0;
for (const product of products) {
    productsPrice = productsPrice + product.price;
} 
console.log(productsPrice);
*/

// --- Total price of cart quantities --- //

let cartTotal = 0;
for (let product of products) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
