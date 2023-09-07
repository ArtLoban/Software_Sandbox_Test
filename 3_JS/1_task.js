/*
1. Напишите функцию deepEqual для проверки двух обьектов на идентичность. Пример:

deepEqual({name: 'test'}, {name: 'test'}) // output true
deepEqual({name: 'test'}, {name: 'test1'}) // output false
deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
deepEqual({name: 'test'}, {name: 'test', age: 10}) // false
*/

function deepEqual(obj1, obj2) {
  // Check props types
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false

  // Check if length matches
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  // Convert to JSON strings and check if those are equal
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

// const ob1 = {name: 'test'};
// const ob2 = {name: 'test'};

// const ob1 = {name: 'test'};
// const ob2 = {name: 'test1'};

// const ob1 = {name: 'test', data: {value: 1}};
// const ob2 = {name: 'test', data: {value: 2}};

const ob1 = {name: 'test'};
const ob2 = {name: 'test', age: 10};

const res = deepEqual(ob1, ob2)
console.log(res);
