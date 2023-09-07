/*
3. Напишите функцию обертку, которая на вход принимает массив функций и их параметров,
 а возвращает массив результатов их выполнения. Количество аргументов исполняемой функции не ограничено!

Пример:
const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ]
).then(console.log)
 // Output: [1, 2, [3, 4]]
*/

async function bulkRun(params) {
  const result = []

  // Loop through functions data
  for (const [func, args] of params) {
    // Call function, use spread operator for arguments
    const res = await func(...args)

    result.push(res)
  }

  return result
}

/*** Testing ***/

// Test function 1
const sliceArray = (arr, start, end) => {
  return arr.slice(start, end)
}

// Test function 2
const fetchData = async (url) => {
  const res = await fetch(url)
  return await res.json()
}
const getTodos = async (url) => {
  return await fetchData(url)
}

// Test function 3
const sumNumbers = (args) => args.reduce((a, b) => a + b);

bulkRun([
  [sliceArray, [['foo',2,null,'bar', false,5,8], 1, 5]],
  [getTodos, ['https://dummyjson.com/todos', fetchData]],
  [sumNumbers, [[1,2,3,4,5,6,7,8,9]]],
]).then((res) => {
  console.log(res)
});
