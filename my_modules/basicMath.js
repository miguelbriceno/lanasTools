/* Created by Miguel Briceño
Contact at: https://github.com/miguelbriceno
This is a free library, it is intended for beginners to do simple calculations.
Each function will have its own explanation. */

/*------------------------------------------------------------------------------
--------------------------------------CONV---------------------------------------
------------------------------------------------------------------------------*/
/* This function converts the elements of an array to numbers, if possible.
Otherwise it omits them and log different errors.*/
function convert(elArray){
  // Cicle thru array items and increse result
  let newArray = [];
  elArray.forEach((element, i) => {
    let dataType = typeof element;
    // Trying to convert data to valid number and add it to total
    switch (dataType) {

      case "number":
        newArray.push(element);
        break;

      default:
        element = Number(element);
        if (isNaN(element)) {
          console.log("Error 1: The data type of \"" + elArray[i] + "\" is not a number. It must be a number and it is: " + dataType + ". It was omited in the covertion process.");
        } else if (typeof element === "number") {
          newArray.push(element);
        } else {
          console.log("Error 1: The data type of \"" + elArray[i] + "\" is not a number. It must be a number and it is: " + dataType + ". It was omited in the covertion process.");
        }
        break;
    }
  });
  return newArray;
}
/*------------------------------------------------------------------------------
--------------------------------------SUM---------------------------------------
------------------------------------------------------------------------------*/
/*  This function receive an array of numbers and returns the sum of all of them.
Inside the array can be integers, floats, strings of a valid numbers and operations between parenthesis which result is a valid number.
If all item of the array are valid numbers, then it'll add them to the total, and return it.*/
module.exports.sum = (numbers) => {
  // Convert data by calling the convertion function
  let opetaionalData = convert(numbers);
  // Define variables
  let sum = 0;
  // Cicle thru array items and increse result
  opetaionalData.forEach((num, i) => {
    sum = sum + num;
  });
  return sum;
}
/*------------------------------------------------------------------------------
--------------------------------------AVG---------------------------------------
------------------------------------------------------------------------------*/
/*  This function receive an array of numbers and the number of decimals that the result is going to show (beteewn 0 and 100), and returns the average of the array with the amount of decimals desired.
If the amount of decimals is empty or is not beteen 0 and 100, it takes 2 as default.*/
module.exports.avg = (numbers, decimals) => {
  //Check if decimal is valid data.
  let dec = Number(decimals);
  if (isNaN(dec) || dec > 100 || dec < 0) {
    dec = 2;
  }
  //Convert an sum all the valid numbers of the array
  let operationalData = convert(numbers);
  //Define variables
  let sum = 0;
  let avg = 0;
  // Accumulate the sum total
  operationalData.forEach((num, i) => {
    sum = sum + num;
  });
  // Divide by array len to obtain average
  avg = sum / (operationalData.length);
  avg = Number(avg.toFixed(dec));
  return avg;
}
/*------------------------------------------------------------------------------
--------------------------------------IS-EVEN-----------------------------------
------------------------------------------------------------------------------*/
/* Use recursion to subtract two by two from a number n, until
it reaches 0 or 1, and that defines it as even or odd. Returns "true" if even. */
module.exports.isEven = (n) => {
  if (typeof n == "number"){
    //In case a negative number is entered
    n = Math.abs(n);
    if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } else {
      n = n - 2;
      //Here it implements recursion by calling itself.
      return isEven(n);
    }
  } else {
    console.log(n + " no es un numero, pruebe ingresando un número.");
  }
}
