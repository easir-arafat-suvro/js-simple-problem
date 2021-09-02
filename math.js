/* math.abs(var), celi (meaning- celling), floor, round, random() -give a random number between 0 to 1,   */

const numberNeg = -150;
const absValue = Math.abs(numberNeg);

const floatNum = 20.5199;
const cellingValue = Math.ceil(floatNum);
const floorValue = Math.floor(floatNum);
const roundValue = Math.round(floatNum);
const randValue1 = Math.random(floatNum);

for (let i = 1; i <= 10; i++) {
    const randValue = Math.random(floatNum) * 1000;
    console.log(randValue);
}


