const phones = [
    { name: 'nokia', price: 45000, camera: 10 },
    { name: 'nokia', price: 40500, camera: 13 },
    { name: 'nokia', price: 40000, camera: 10 },
    { name: 'nokia', price: 35000, camera: 12 },
    { name: 'nokia', price: 15000, camera: 15 }
];


let cheapest = phones[0];

for (i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);


console.log('-----------');


for (const element of phones) {
    if (element.price < cheapest.price) {
        cheapest = element;
    }
}
console.log(cheapest);

