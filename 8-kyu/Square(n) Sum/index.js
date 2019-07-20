// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Суть задачи в том что нам нужно каждое число умножить на два и потом все это сложить и на выходе получить число.
// map - проходим по всему массиву умножая каждый элемент на 2 / reduce - складываем все элементы массива / на выходе получаем число

function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0);
}
