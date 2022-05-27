/* Created by Miguel Briceño
Contact at: https://github.com/miguelbriceno
This is a free library, it is intended for beginners to do simple calculations.
Each function will have its own explanation. */

//-----SUM-----
/*  This function receive an array of numbers and returns the sum of all of them.
Inside the array can be integers, floats, strings of a valid numbers and operations between parenthesis which result is a valid number.
It will check if the array item is a valid number to add it, else it´ll try to convert it, else return error.
If all item of the array are valid numbers, then it'll add them to the total, and return it.*/
module.exports.sum = (numbers) => {
  // Define variables
  let sum = 0;
  let numtype = "";
  // Cicle thru array items and increse result
  numbers.forEach((num, i) => {
    numtype = typeof num;
    // Trying to convert data to valid number and add it to total
    switch (numtype) {

      case "number":
        sum += num;
        break;

      case "string":
        num = Number(num);
        if (isNaN(num)) {
          console.log("Error 1: The data type of \"" + numbers[i] + "\" is not a number. It must be a number.");
          sum = "Error 1. Ckeck console for details";
        } else if (typeof num === "number") {
          sum += num;
        } else {
          console.log("Error 2: The data type of \"" + numbers[i] + "\" is not aceptable. It must be a number.");
          sum = "Error 2. Ckeck console for details";
        }
        break;

      case String:
        num = Number(num);
        if (isNaN(num)) {
          console.log("Error 3: The data type of \"" + numbers[i] + "\" is not a number. It must be a number.");
          sum = "Error 3. Ckeck console for details";
        } else if (typeof num === "number") {
          sum += num;
        } else {
          console.log("Error 4: The data type of \"" + numbers[i] + "\" is not aceptable. It must be a number.");
          sum = "Error 4. Ckeck console for details";
        }
        break;

      default:
        console.log("Error 5: Something went wrong with the data: \"" + numbers[i] + "\".");
        sum = "Error 5. Ckeck console for details";
        break;
    }
  });
  return sum;
}
