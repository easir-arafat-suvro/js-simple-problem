//22_5-5 Explore break and continue for selecting some products

const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 3200 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'boshundhara binding paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'old granny land phone', price: 100 },
    { name: 'samsung watch', price: 1000 },
    { name: 'dell laptop', price: 31000 },
    { name: 'lenevo laptop', price: 41000 },
]


// Break : break the loop if the condition meet

for (const product of products) {
    if (product.price < 10000) {
        break;
    }
    console.log(product);
}



//Continue : if match the condition than escap the items and continue to next items ---

for (const product of products) {
    if (product.price < 10000) { // if product price<10000 than escap the items
        continue; // continue for the next items
    }
    console.log(product);
}