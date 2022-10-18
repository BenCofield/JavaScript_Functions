console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function PrintOdds(count) {
    for (let i = 0; i <= count; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function CheckAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}
