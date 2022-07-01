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

/*------------------------------------------------------------------------------
-----------------------------FRIST CHAR TO UPPERCASE----------------------------
------------------------------------------------------------------------------*/
// Receives a string and converts the first letter of each word to uppercase and the rest to lowercase.
module.exports.toUpperFirst = (cadena) => {
  let newCadena = [];
  let isBlankSpace = /\s/;
  let isValid = /\w/;
  let firstValidCharFlag = false;
  // 0) Validate that the received data is a string.
  if (typeof cadena != 'string'){
    return console.log("Erro0: Por favor ingresa una cadena válida.");
  }
  // 1) Convert the entire string to lowercase and then convert it to an array so it can be traversed.
  cadena = cadena.toLowerCase();
  cadena = Array.from(cadena);
  // 2) Go through the string lookin for the chars to modify
  cadena.forEach((char, i)=>{
    if(isValid.test(char) === true && firstValidCharFlag === false){ // Is it a valid char?
      firstValidCharFlag = true;
      newCadena.push(char.toUpperCase());
    } else if (isValid.test(char) === true && firstValidCharFlag === true){
      if(isBlankSpace.test(cadena[i-1]) === true){ // Is it preceded by a blank space?
        newCadena.push(char.toUpperCase());
      } else {
        newCadena.push(char);
      }
    } else {
      newCadena.push(char);
    }
  });
  // 3) Convert the new array to a string and return it.
  newCadena = newCadena.join("");
  return newCadena;
}
