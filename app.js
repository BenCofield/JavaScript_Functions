console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function PrintOdds(count) {
    for (let i = 0; i <= count; i++) {
        if (Math.abs(i % 2) === 1) {
            console.log(i);
        }
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function CheckAge(userName = "user", age = 0) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

console.log("EXERCISE 3:\n===========\n");

function Quadrant(x, y) {
    let result = `(${x, y})`;
    if (x === 0) result += " is on the x axis";
    if (y === 0) result += " is on the y axis";
    if (x > 0) {
        if (y > 0) result += " is in Quadrant 1";
        else result += " is in Quadrant 4";
    }
    else {
        if (y > 0) result += " is in Quadrant 2";
        else result += " is in Quadrant 3";
    }
    return result;
}

console.log("EXERCISE 4:\n============\n");

function TriangleType(x, y, z) {
    let result = `Sides ${x, y, z} make `;
    if (x + y <= z || y + z <= x || x + z <= y) {
        return result + "an invalid triangle";
    }

    if (x == y && y == z) {
        return result + "an equilateral triangle";
    }
    else if (x == y || y == z || x == z) {
        return result + "an isosceles triangle";
    }
    else {
        return result + "a scalene triangle";
    }
}