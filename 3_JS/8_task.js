/*
8. Напишите функцию combos,
 которая принимает положительное целое число num и возвращает массив массивов положительных целых чисел,
 где сумма каждого массива равна num. Массивы не должны повторяться.

Пример:
combos(3);
// Output:
[
  [ 3 ],
  [ 1, 1, 1 ],
  [ 1, 2 ]
]

combos(10);
// Output:
[
  [ 10 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
  [ 1, 1, 1, 1, 1, 1, 1, 3 ],
  [ 1, 1, 1, 1, 1, 1, 4 ],
  [ 1, 1, 1, 1, 1, 5 ],
  [ 1, 1, 1, 1, 6 ],
  [ 1, 1, 1, 7 ],
  [ 1, 1, 8 ],
  [ 1, 9 ],
  [ 1, 1, 1, 1, 1, 1, 2, 2 ],
  [ 1, 1, 1, 1, 1, 2, 3 ],
  [ 1, 1, 1, 1, 2, 4 ],
  [ 1, 1, 1, 1, 2, 2, 2 ],
  [ 1, 1, 1, 1, 3, 3 ],
  [ 1, 1, 1, 2, 5 ],
  [ 1, 1, 1, 2, 2, 3 ],
  [ 1, 1, 1, 3, 4 ],
  [ 1, 1, 2, 6 ],
  [ 1, 1, 2, 2, 4 ],
  [ 1, 1, 2, 2, 2, 2 ],
  [ 1, 1, 2, 3, 3 ],
  [ 1, 1, 3, 5 ],
  [ 1, 1, 4, 4 ],
  [ 1, 2, 7 ],
  [ 1, 2, 2, 5 ],
  [ 1, 2, 2, 2, 3 ],
  [ 1, 2, 3, 4 ],
  [ 1, 3, 6 ],
  [ 1, 3, 3, 3 ],
  [ 1, 4, 5 ],
  [ 2, 8 ],
  [ 2, 2, 6 ],
  [ 2, 2, 2, 4 ],
  [ 2, 2, 2, 2, 2 ],
  [ 2, 2, 3, 3 ],
  [ 2, 3, 5 ],
  [ 2, 4, 4 ],
  [ 3, 7 ],
  [ 3, 3, 4 ],
  [ 4, 6 ],
  [ 5, 5 ]
]
*/

function combos(num) {
  function genNumbers(target, start, current) {
    if (target === 0) {
      // When target number decreased up to zero, add copied set of numbers to the resulting array, and stop current recursion
      result.push([...current])
      return;
    }

    for (let i = start; i <= target; i++) {
      // Add new number to the set of numbers
      current.push(i)
      // Re-lunch numbers generation
      genNumbers(target - i, i, current)
      // Removes the last element from an array
      current.pop()
    }
  }

  const result = []
  // Run recursive numbers generation
  genNumbers(num, 1, [])

  return result
}

console.log(combos(3))
console.log(combos(10))
