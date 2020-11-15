let A = [10, 5, 13, 18, 51];

//Task 1.1
function printArr(arr) {
    for (num of A) {
        console.log(num);
    }
}
printArr(A);

//Task 1.2
function multiplyByTwo(arr) {
    return arr.map(num => num * 2);
}
let B = multiplyByTwo(A);
console.log(B);

//Task 1.3
function getEven(arr) {
    return arr.filter(num => (num % 2) === 0);
}
console.log(getEven(A));

//Task 1.4
function containsLessThanTen(arr) {
    return arr.reduce((acc, curr) => acc || (curr < 10), false);
}
console.log(containsLessThanTen(A));
console.log(containsLessThanTen(B));

//Task 1.5
function getDividedByThree(arr) {
    return arr.filter(num => num % 3 === 0);
}
console.log(getDividedByThree(A));

//Task 1.6
function sumAll(arr) {
    return arr.reduce((acc, curr) => acc += curr, 0);
}
console.log(sumAll(A));

//Task 1.7
let C = A.slice(A.length - 2, A.length);
console.log(C);