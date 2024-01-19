function checkProbabilityTheory(count) {
    let totalNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;
 
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        totalNumbers++;
 
        if (randomNumber % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
 
    let percentageRatio = `${(evenNumbers / totalNumbers * 100).toFixed(2)}% / ${((oddNumbers / totalNumbers) * 100).toFixed(2)}%`;
 
    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Кількість парних чисел: ${evenNumbers}`);
    console.log(`Кількість непарних чисел: ${oddNumbers}`);
    console.log(`Співвідношення парних і непарних чисел: ${percentageRatio}`);
 }
 
 let count = 321;
 checkProbabilityTheory(count);