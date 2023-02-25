function sum(...numbers) {
  return numbers.reduce((total, now) => total + now, 0);
}


const numArr = [1, 2, 3];
console.log(sum(...numArr));