function findPairDivisibleBy17() {
    let count = 0;
    for (let i = 0; i <= 100; i++){
        for (let j = i + 1; j <= 100; j++){
            if ((i + j) % 17 === 0){
                count += 1;
                console.log(`(${i}, ${j}) = ${i + j}`);
            }
        }
    }
    console.log(`Tổng cộng: ${count} cặp`);
}
findPairDivisibleBy17();