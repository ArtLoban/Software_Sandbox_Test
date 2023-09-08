/*
5. Написать обратный метод (см. задачу 4) objectToArray, который из объекта создаст массив. Пример:

objectToArray({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
})

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]
*/

function objectToArray(obj) {
  const result = []

  // Validate income param
  if (typeof obj !== 'object' || obj === null) return result

  for (const key in obj) {
    const arrItem = []

    // Set first item in array
    arrItem.push(key)

    let value = obj[key]
    // Set value. User recursion if object
    value = (typeof value === 'object' && value !== null) ? objectToArray(value) : value
    // Set second item in array
    arrItem.push(value)

    // Push new array item to the resulting array
    result.push(arrItem)
  }

  return result
}

const res = objectToArray({
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5
  }
})

console.log(res);