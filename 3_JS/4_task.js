/*
4. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример:

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

arrayToObject(arr)
// Outputs: {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
*/

function arrayToObject(arr) {
  const result = {}

  // Validate if array
  if (!Array.isArray(arr)) return result

  // Loop through array
  arr.forEach((el, i) => {
    // Destruct values from array element
    const [key, value] = el

    // Push data to object. Use recursion if value is array
    result[key] = (Array.isArray(value)) ? arrayToObject(value) : value
  })

  return result
}

const arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]
const res = arrayToObject(arr)
console.log(res);