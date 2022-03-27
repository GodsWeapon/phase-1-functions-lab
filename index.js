// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {

    return Math.abs(pickupLocation - 42);

}

function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);

    return distanceFromHqInBlocks(pickupLocation) * 264;

}

function distanceTravelledInFeet(startBlock, endBlock) {

const feetTravelled = startBlock - endBlock;

return Math.abs(feetTravelled * 264);

}

function calculatesFarePrice(startBlock, endBlock, farePrice) {
    distanceTravelledInFeet(startBlock, endBlock);

    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock) - 400;

    if (feetTravelled < 1) {
        farePrice = 0;
    } else if ((feetTravelled >= 1) && (feetTravelled <= 1600)) {
        farePrice = feetTravelled * 2 * 0.01;
    } else if ((feetTravelled > 1600) && (feetTravelled <= 2100)) {
        farePrice = 25
    } else if (feetTravelled > 2100) {
        return "cannot travel that far";
    }

    return farePrice;
    }