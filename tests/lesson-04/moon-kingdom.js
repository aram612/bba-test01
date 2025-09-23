// Exercise 1 - Option 1
function createCharacters() {
    const characters = [
        {name: "Tanjiro", level: 5, health: 200},
        {name: "Inotsuke", level: 3, health: 300},
        {name: "Zenitsu", level: 4, health: 400},
        {name: "Nezuko", level: 2, health: 800}
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

// Exercise 1 - Other option
console.log(`\n`);
function createCharacters2() {
    const characters = [
        {name: "Tanjiro", level: 5, health: 200},
        {name: "Inotsuke", level: 3, health: 300},
        {name: "Zenitsu", level: 4, health: 400},
        {name: "Nezuko", level: 2, health: 800}
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

console.log(charactersPowerUp);
console.log(possibleWinners);

// Exercise 2

function printLeaderboard(players) {
    const topMedal = ['🥇', '🥈', '🥉'];
    players.sort((a, b) => b.score - a.score);
    players.forEach((player, index) => {
        let medal = '';
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
