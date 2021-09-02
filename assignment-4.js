// ----------- Problem : 1 -------------

function seerToMon(seer) {
    const seerPerMon = 40;
    if (seer == null) {
        return 'Input field is empty !!!';
    }
    else if (seer === '' || '' < seer.length) {
        return 'String not allowed !!!';
    }
    else if (seer <= 0) {
        return 'Only input positive numbers which is greater than zero!!!';
    }
    else {
        const totalMon = seer / seerPerMon;
        return totalMon;
    }
}

const totalMon = seerToMon(440);
console.log(totalMon);


// ----------- Problem : 2 -------------

function totalSales(shirt, pant, shoe) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalShirtPrice = shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoePrice = shoe * shoePrice;

    const totalSalesPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    if (totalSalesPrice == 0 || totalSalesPrice < 0) {
        return 'Check your input';
    }
    else {
        return totalSalesPrice;
    }
}

const totalPrice = totalSales(10, 30, 50);
console.log(totalPrice);


// ----------- Problem : 3 -------------

function deliveryCost(tshirt) {
    const deliveryCostFirst100PerPcs = 100;
    const deliveryCostSecond100PerPcs = 80;
    const deliveryCostRestPerPcs = 50;

    if (tshirt == null) {
        return 'Input field is empty !!!';
    }
    else if (tshirt === '' || '' < tshirt.length) {
        return 'String not allowed !!!';
    }
    else if (tshirt <= 0) {
        return 'Only input positive numbers which is greater than zero!!!';
    }
    else {
        if (tshirt <= 100) {
            return tshirt * deliveryCostFirst100PerPcs;
        }
        else if (tshirt <= 200) {
            const first100Cost = 100 * deliveryCostFirst100PerPcs;
            return first100Cost + (tshirt - 100) * deliveryCostSecond100PerPcs;
        }
        else {
            const firstAndSecond200Cost = 100 * deliveryCostFirst100PerPcs + 100 * deliveryCostSecond100PerPcs;
            return firstAndSecond200Cost + (tshirt - 200) * deliveryCostRestPerPcs;
        }
    }
}

const totalDeliveryCost = deliveryCost(90);
console.log(totalDeliveryCost);


// ----------- Problem : 4 -------------

const friends = ['sun', 'moon', 'arafat', 'suvro', 'adur', 'afsir'];

function perfectFriend(friends) {
    let bestFriend = '';
    for (let i = 0; i < friends.length; i++) {
        const friendName = friends[i];
        if (friendName.length < 5 || friendName.length > 5) {
            bestFriend = 'Best friend is not available !!!';
        }
        else if (friendName.length == 5) {
            bestFriend = friendName;
            break;
        }
    }
    return bestFriend;
}

const bestFriend = perfectFriend(friends);
console.log(bestFriend);