// 21-9 (advanced) Travelling in a Jungle and counting wild animals

function animalCount(miles) {
    const first10Miles = 10;
    const second10Mile = 50;
    const restMiles = 100;

    if (miles <= 10) {
        const totalAnimals = miles * first10Miles;
        return totalAnimals;
    }
    else if (miles <= 20) {
        const totalAnimals10 = 10 * first10Miles;
        const extraMiles = miles - 10;
        const totalAnimals20 = extraMiles * second10Mile;
        const totalAnimals = totalAnimals10 + totalAnimals20;
        return totalAnimals;
    }
    else {
        const totalAnimalsUpto20 = 10 * first10Miles + 10 * second10Mile;
        const extraMiles = miles - 20;
        const totalAnimals = totalAnimalsUpto20 + (extraMiles * restMiles);
        return totalAnimals;
    }
}

const milesTravaled = 25;
const totalAnimals = animalCount(milesTravaled);

console.log(totalAnimals);

