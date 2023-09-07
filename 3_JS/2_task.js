/*
2. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.

Пример:
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
iterator.next() // { value: [1,2,3], done: false }
iterator.next() // { value: [4,5,6], done: false }
iterator.next() // { value: [7,8], done: false }
iterator.next() // { value: undefined, done: true }
*/

function* chunkArray(arr, size) {
  // Loop through array
  for (let i = 0; i < arr.length; i = i + size) {
    // Using start and end indexes extract the part of array that will be returned on iteration
    yield arr.slice(i, i + size);
  }
}

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3)

for (let chunk of iterator) {
  console.log(chunk);   // [1,2,3], [4,5,6], [7,8]
}
