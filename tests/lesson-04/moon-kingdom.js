// Exercise 1 - Option 1
function createCharacters() {
    const characters = [
        { name: "Tanjiro", level: 5, health: 200 },
        { name: "Inotsuke", level: 3, health: 300 },
        { name: "Zenitsu", level: 4, health: 400 },
        { name: "Nezuko", level: 2, health: 800 }
    ];

    const charactersPowerUp = characters.map(char => ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(charPower => charPower.health > 1000);

    return { charactersPowerUp, possibleWinners };
}

const result = createCharacters();
console.log(result);

// Option 2 for Ex 1
console.log(`\n`);
console.log(`Option 2 for Ex 1`);
function createCharacters2() {
    const characters = [
        { name: "Tanjiro", level: 5, health: 200 },
        { name: "Inotsuke", level: 3, health: 300 },
        { name: "Zenitsu", level: 4, health: 400 },
        { name: "Nezuko", level: 2, health: 800 }
    ];

    const charactersPowerUp = characters.map(char => ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }));

    return charactersPowerUp
};

const charactersPowerUp = createCharacters2();
const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

console.log('Characters PowerUp: ', charactersPowerUp);
console.log('Possible Winners: ', possibleWinners);

// Exercise 2
console.log(`\n`);
console.log(`Option 1 for Exercise 2`);
function printLeaderboard(players) {
    const topMedal = ['🥇', '🥈', '🥉'];
    players.sort((a, b) => b.score - a.score);
    players.forEach((player, index) => {
        let medal = '  ';
        if (index < 3) {
            medal = topMedal[index]
        }
        // if (index < 3) ? medal = topMedal[index] : ''; - dùng cách này thì bỏ let medal = '', code gọn hơn. Không biết còn cách nào gọn hơn không ạ
        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score}`);
    });

}

const players = [
    { name: "Sukuna", score: 1000 },
    { name: "Itadori", score: 850 },
    { name: "Megumi", score: 950 },
    { name: "Gojo", score: 1200 },
    { name: "Nobara", score: 700 }
];

printLeaderboard(players);


// Option 2 for ex2: use for normal
console.log(`\n`);
console.log(`Option 2 for Exercise 2`);
function printLeaderboardOp2(playersOp2) {
    const topMedal = ['🥇', '🥈', '🥉'];
    playersOp2.sort((a, b) => b.score - a.score);

    for (let i = 0; i < playersOp2.length; i++) {
        let medal = '  ';
        if (i < 3) {
            medal = topMedal[i];
        }
        console.log(`${medal} ${i + 1}. ${playersOp2[i].name} - ${playersOp2[i].score}`);
    };
}

const playersOp2 = [
    { name: "Sukuna", score: 1000 },
    { name: "Itadori", score: 850 },
    { name: "Megumi", score: 950 },
    { name: "Gojo", score: 1200 },
    { name: "Nobara", score: 700 }
];

printLeaderboardOp2(playersOp2);

// Option 3 for ex2: use for..of
console.log(`\n`);
console.log(`Option 3 for Exercise 2`);
function printLeaderboardOp3(playersOp3) {
    const topMedal = ['🥇', '🥈', '🥉'];
    playersOp3.sort((a, b) => b.score - a.score);

    let index = 0;
    for (let i in playersOp3) {
        let medal = '  ';
        if (index < 3) {
            medal = topMedal[index];
        }
        console.log(`${medal} ${index + 1}. ${playersOp3[index].name} - ${playersOp3[index].score}`);
        index++;
    };
}

const playersOp3 = [
    { name: "Sukuna", score: 1000 },
    { name: "Itadori", score: 850 },
    { name: "Megumi", score: 950 },
    { name: "Gojo", score: 1200 },
    { name: "Nobara", score: 700 }
];

printLeaderboardOp3(playersOp3);