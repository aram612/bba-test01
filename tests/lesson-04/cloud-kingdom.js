let playerName = 'Mario';
let currentLives = 3;
const coinsLevel = {
    level1: 25,
    level2: 30,
    level3: 45
};

// Cách 1
const avgCoin = (coinsLevel.level1 + coinsLevel.level2 + coinsLevel.level3) / 3;
console.log(avgCoin);

const coinRemainder = (coinsLevel.level1 + coinsLevel.level2 + coinsLevel.level3) % 3;
console.log(coinRemainder);

// Cách 2
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

console.log(`\n`);
console.log((coinsLevel1 + coinsLevel2 + coinsLevel3) / 3);
console.log((coinsLevel1 + coinsLevel2 + coinsLevel3) % 3);

// Cách 3

const coinsLevelMath = [25, 30, 45];

console.log(`\n`);
console.log((coinsLevelMath[0] + coinsLevelMath[1] + coinsLevelMath[2]) / 3);
console.log((coinsLevelMath[0] + coinsLevelMath[1] + coinsLevelMath[2]) % 3);

// Cách 4
function coinsLevelArr(level1, level2, level3) {
    const avg = (level1 + level2 + level3) / 3;
    const remainder =  (level1 + level2 + level3) % 3;
    return [avg, remainder];
};

const coinsArr = coinsLevelArr(25, 30, 45);

console.log(`\n`);
console.log(coinsArr[0]);
console.log(coinsArr[1]);

// Cách 5
function coinsLevelObj(level1, level2, level3) {
    const avg = (level1 + level2 + level3) / 3;
    const remainder =  (level1 + level2 + level3) % 3;
    return {avg: avg, remainder: remainder};
};

const coinsReturn = coinsLevelObj(25, 30, 45);
const coinsObj = {};
coinsObj.avg = coinsReturn.avg;
coinsObj.remainder = coinsReturn.remainder;

console.log(`\n`);
console.log(coinsObj.avg);
console.log(coinsObj.remainder);