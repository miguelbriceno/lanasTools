// Created by Miguel Briceño
// Contact on: https://github.com/miguelbriceno
//
// This is a free library, it is intended for beginners to do simple calculations.
// Each function will have its own explanation.

//-----SUM-----
// This function recive an array of numbers and returns the sum of all od them
module.exports.nombreMetodo = (numbers) => {
  let sum = 0;
  numbers.forEach((num, i) => {
    sum += numbers[i];
    console.log(sum);
  });
	return sum;
	}
