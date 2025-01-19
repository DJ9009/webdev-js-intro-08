"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Array to be used for the assignment
let myNumbers = [354, 25, 98, 145, 67, 300, 88, 150, 102];

// 1. Function to find the smallest number in the array
function findSmallestNumber(numbers) {
    let smallest = numbers[0]; // Start with the first number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

// 2. Function to find the largest number in the array
function findLargestNumber(numbers) {
    let largest = numbers[0]; // Start with the first number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// 3. Function to find the average of numbers in the array
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Rendering the answers
console.log("Answer Output:");
console.log("Output the result of findSmallestNumber.");
console.log("Expected: 25");
console.log("Actual: " + findSmallestNumber(myNumbers));

console.log("Output the result of findLargestNumber.");
console.log("Expected: 354");
console.log("Actual: " + findLargestNumber(myNumbers));

console.log("Output the result of findAverage.");
console.log("Expected: 123.55555555555556");
console.log("Actual: " + findAverage(myNumbers));
