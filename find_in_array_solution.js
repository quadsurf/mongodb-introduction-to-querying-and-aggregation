function find(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) return element;
  }
  return null;
}

console.log(find([1,2,3,4], 3)); // 3
console.log(find([1,2,3],0)); // null
