// Prevent us from attempting to use variables
// that are not declared
"use strict"

// 1. Create an array and loop through it, logging out each value using the basic loop syntax.
let array1 = [5, 10, 15, 20, 25];
for (let i = 0; i < array1.length; i++) {
    console.log(`Basic Loop - Element at index ${i}: ${array1[i]}`);
}

// 2. Create an array and loop through it, logging out each value using the "for...of" syntax.
let array2 = ['apple', 'banana', 'cherry'];
for (let fruit of array2) {
    console.log(`For...of Loop - Fruit: ${fruit}`);
}

// 3. Create an array and loop through it, logging out each value using the Array.forEach() method.
let array3 = [100, 200, 300];
array3.forEach(function(number) {
    console.log(`forEach Loop - Number: ${number}`);
});

// 4. Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
let array4 = [1, 2, 3, 4, 5];
for (let num of array4) {
    num = num * 2; // This modifies the variable `num`, but not the array itself.
    console.log(`For...of with reassignment - New Value: ${num}`);
}
console.log(`Original Array after For...of: ${array4}`); // The original array remains unchanged.

// 5. Loop through an array using the Array.forEach() method and try assigning all the elements a new value. What happens?
let array5 = [10, 20, 30, 40, 50];
array5.forEach(function(num, index) {
    num = num + 5; // This modifies only the local variable `num`, not the array.
    console.log(`forEach with reassignment - New Value: ${num}`);
});
console.log(`Original Array after forEach: ${array5}`); // The original array remains unchanged.

// 6. Research "for...in" loops.
let objectExample = { name: 'John', age: 30, city: 'New York' };
for (let key in objectExample) {
    console.log(`For...in Loop - Key: ${key}, Value: ${objectExample[key]}`);
}
// Note: "for...in" is generally used to iterate over properties of an object, not elements of an array.

