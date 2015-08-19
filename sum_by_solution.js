function sumBy(array) {
  var output = {}, currentVal;

  for (var i = 0; i < array.length; i++) {
    currentVal = output[array[i].department] || 0;
    output[array[i].department] = currentVal + array[i].totalPrice;
  }

  return output;
}

var data = [
  {department: 'Food', totalPrice: 10},
  {department: 'Food', totalPrice: 14},
  {department: 'Not Food', totalPrice: 2},
  {department: 'Not Food', totalPrice: 682}
];

console.log(sumBy(data)); // { Food: 24, 'Not Food' : 684 }