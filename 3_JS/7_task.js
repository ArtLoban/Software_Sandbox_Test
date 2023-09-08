/*
7. Напишите функцию, которая берет объект любой вложенности и преобразует ее в единую плоскую карту с разными уровнями,
 разделенными косой чертой ( '/').

 Пример:
const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World'
    },
    e: [1,2,3]
  }
};

mapObject(demoData);
// Outputs: {
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
*/

function mapObject(obj, map = '', result = {}) {
  // Validate income param
  if (typeof obj !== 'object' || obj === null) return result

  // Loop through
  for (const item in obj) {
    // Update map key with nested key using delimiter
    const newMap = (map.length > 0) ? `${map}/${item}` : item;
    const value = obj[item]

    // console.log(newMap);
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Run recursion in depth if value is Object type, excluding arrays. Pass mapped key and result of previous iterations as props
      mapObject(value, newMap, result)
    } else {
      // If value is not Object, just assign the value to the mapped key
      result[newMap] = value
    }
  }

  return result
}

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World'
    },
    e: [1,2,3]
  }
};

const res =  mapObject(obj)
console.log(res);