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

/*------------------------------------------------------------------------------
------------------------------------CODE A SRTING-------------------------------
------------------------------------------------------------------------------*/
// Data encoder
// Receive a string and encode it so that it is unrecognizable without the decoding key.
function codeThat(data, key){
  // 0) Variables
  let dataType = typeof data, keyType = typeof key, keyDigit = 0, verificationCodes = [], encryptedData = {};

  // 1) Verify that the data is valid
  if(typeof data == "string" || typeof data == "number"){
    data = data.toString();
    data = Array.from(data);
    if(typeof key == "string" || typeof key == "number"){
      key = key.toString();
      key = Array.from(key);
    }else{
      return console.log("Error1: La clave de cifrado debe ser una cadena o numero válido.");
    }
  }else{
    return console.log("Error0: Los datos a codificar deben debe ser una cadena o numero válido.");
  }

  // 2) Generate verifiers
  let keyLen = key.length; // Key and Data length
  let dataLen = data.length;
  // Sum of key values
  let keySum = 0;
  key.forEach((char)=>{
    keySum += char.charCodeAt();
  });
  keyDigit = Array.from(keySum.toString()); // Gets the digit for the modification at level 2.
  keyDigit = Number(keyDigit[0]);

  // Sum of the first n characters of the data
  let dataSum = 0;
  for(let y=0; y<(data.length / 2); y++){
    dataSum += data[y].charCodeAt();
  }
  verificationCodes.push(dataType, keyType, dataSum, keySum, dataLen, keyLen);

  // 3) Level 1 - Change for index
  key.forEach((keyChar, i)=>{
    data.forEach((dataChar, j)=>{
      if(keyChar == dataChar && Number(dataChar) == NaN){
        data[j] = i.toString();
      }
    });
  });

  // 4) Level 2- Reverse the order and go to U code and modify it.
  data = data.reverse();
  data.forEach((char, o)=>{
    data[o] = (data[o].charCodeAt() + keyDigit);
  });

  // 5) Return to unicode
  data.forEach((code, p)=>{
    data[p] = String.fromCharCode(code);
  });
  data = data.join("");

  // 6) Retunr result
  encryptedData = {
    "data":data,
    "verifiers":verificationCodes
  }
  return encryptedData;
}

/*------------------------------------------------------------------------------
------------------------------------DECODE A SRTING-----------------------------
------------------------------------------------------------------------------*/
// Data decoder
// Receives an object created by the codeThat function and a string with the key to decode it and returns the original string.
function decodeThat(dataObject, key) {
  // 0) Data verification and extraction
  if(typeof dataObject == "object" && (typeof key == "string" || typeof key == "number") && (dataObject.hasOwnProperty("data") && dataObject.hasOwnProperty("verifiers"))){
    if(typeof (dataObject.data == "string" || dataObject.data == "number") && dataObject.verifiers.length == 6){
      // Object data extraction
      var actualKeyType = typeof key; // Save to verify against the original.
      var dataType = dataObject.verifiers[0], keyType = dataObject.verifiers[1], dataSum = dataObject.verifiers[2], keySum = dataObject.verifiers[3], dataLen = dataObject.verifiers[4], keyLen = dataObject.verifiers[5];
      var keyDigit = Array.from(keySum.toString());
      keyDigit = Number(keyDigit[0]);
      var decoData = Array.from(dataObject.data.toString()); // Data to decode in array form
      key = Array.from(key.toString());
    }else{
      return console.log("Error1: Los datos recibidos no son del tipo correcto o estaban incompletos.");
    }
  }else{
    return console.log("Error0: Los datos recibidos no son del tipo correcto.");
  }

  // 1) Check if the key entered is correct and the length of the data
  let actualKeySum = 0;
  key.forEach((char)=>{
    actualKeySum += char.charCodeAt();
  });
  if(actualKeyType == keyType && actualKeySum == keySum && key.length == keyLen){
    if(decoData.length != dataLen){
      return console.log("Error3: El tamaño de la data no coincide con el original.");
    }
  }else{
    return console.log("Error2: La clave ingresada no coincide.");
  }

  // 2) Convert data to unicode codes, modify and reorder them
  decoData = decoData.reverse();
  decoData.forEach((char, o)=>{
    decoData[o] = (decoData[o].charCodeAt() - keyDigit);
  });

  // 3) Return to unicode characters
  decoData.forEach((code, p)=>{
    decoData[p] = String.fromCharCode(code);
  });

  // 4) Check the sum of the first n characters of the data
  let actualDataSum = 0;
  for(let y=0; y<(decoData.length / 2); y++){
    actualDataSum += decoData[y].charCodeAt();
  }
  if(actualDataSum != dataSum){
    return console.log("Error4: Los datos no corresponden a los originales.");
  }

  // 5) Change data to original type
  decoData = decoData.join("");

  // 6) Return original String
  return decoData;
}
