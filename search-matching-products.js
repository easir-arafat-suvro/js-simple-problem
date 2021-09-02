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

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product); // you can put any word, text, words;
        }
    }
    return matched;
}


const searchResult = searchProducts(products, 'phone')
console.log(searchResult);