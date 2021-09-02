// 21-5 Use add and multiplication to calculate wood requirements.

function woodRequirment(chairQty, tableQty, bedQty) {
    const perChairWoodRequired = 3;
    const perTableWoodRequired = 10;
    const perBedWoodRequired = 50;

    // wood calculation

    const totalWoodRequiredForChair = chairQty * perChairWoodRequired;
    const totalWoodRequiredForTable = tableQty * perTableWoodRequired;
    const totalWoodRequiredForBed = bedQty * perBedWoodRequired;

    // total wood required
    const totalWoodRequired = totalWoodRequiredForChair + totalWoodRequiredForTable + totalWoodRequiredForBed;

    return totalWoodRequired;
}


const chairQty = 30;
const tableQty = 10;
const bedQty = 50;



const totalRequireInCft = woodRequirment(chairQty, tableQty, bedQty);
console.log(totalRequireInCft);

