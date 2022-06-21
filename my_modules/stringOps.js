/* Created by Miguel Briceño
Contact at: https://github.com/miguelbriceno
This is a free library, it is intended for beginners to do simple string operations.
Each function will have its own explanation. */

/*------------------------------------------------------------------------------
--------------------------------------CHAR-COUNT--------------------------------
------------------------------------------------------------------------------*/
/*Receive two strings and return an array with two arguments:
1) The number of times the first character of the second string is in the first string.
2) An array with the positions in which said character is found in the second string.
*/
module.exports.countChar = (cadena, c) => {
  if (c.length > 1) {
    console.log("Ten en cuenta que solo se contarán el número de veces que se halle el primer caractér de \'" + c + "\' es decir \'" + c[0] + "\'.");
  }
  let sum = 0;
  let posArray = [];
  let dataBack = [];
  for(let i=0; i<cadena.length; i++) {
    if (c[0] == cadena[i]) {
      sum++;
      posArray.push(i);
    }
  }
  dataBack.push(sum);
  dataBack.push(posArray);
  return dataBack;
}
