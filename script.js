

let numbers = [4, 7, 2, 8, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log("Середнє значення масиву:", average);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Елемент з найбільшим числом:", max);