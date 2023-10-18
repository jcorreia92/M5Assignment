// N.B. These implementations do not contain exception handling for arguments
// that are not numbers.

//STEP 1

function halfNumber(number) {
    return number / 2;
}

console.log("Half of 5 is " + halfNumber(5) + ".");
console.log("Half of 7.5 is " + halfNumber(7.5) + ".");
console.log("Half of -4 is " + halfNumber(-4) + ".");

//STEP 2

function squareNumber(number) {
    return Math.pow(number, 2);
}

console.log("The square of the number 3 is " + squareNumber(3) + ".");
console.log("The square of the number 12 is " + squareNumber(12) + ".");
console.log("The square of the number 7.5 is " + squareNumber(7.5) + ".");

//STEP 3

function percentOf(first, second) {
    return (first * 100) / second;
}

console.log("2 is " + percentOf(2, 4) + "% of 4.");
console.log("3 is " + percentOf(3, 5) + "% of 5.");
console.log("6 is " + percentOf(6, 4) + "% of 4.");

//STEP 4

// It is assumed that the operation is first % second
function findModulus(first, second) {
    return first % second;
}

console.log("The modulus of 10 and 4 is " + findModulus(10,4) + ".");
console.log("The modulus of 4 and 10 is " + findModulus(4,10) + ".");
console.log("The modulus of 5 and 2 is " + findModulus(5,2) + ".");