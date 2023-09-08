/*
9. Напишите функцию add, которая бы работала следующим образом add(1)(2)(7)...(n).
 Количество последовательных визовов неограничено.

Пример:
Number(add(1)(2)); // == 3
Number(add(1)(2)(5)); // == 8
Number(add(1)(2)(-3)(4)); //  == 4
Number(add(1)(2)(3)(4)(-5)); // == 5
*/

function add(num) {
  let sum = num

  const sumNumbers = nextNum => {
    sum += nextNum

    return sumNumbers
  }

  // Provide the method for Number()
  sumNumbers.valueOf = () => sum

  return sumNumbers
}

const res = Number(add(1)(2)(3)(4)(-5))
console.log(res)
