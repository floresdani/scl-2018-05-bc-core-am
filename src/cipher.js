window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código */
  let cipherText = ""; //string vacio que voy a recibir
  let i = 0; //indice es cero
  for(i = 0; i < string.length; i++){ //que inicie en el indice con valor cero, que se detenga recorriendo la longitud del string e incremente en 1 al itinerar.
    let letterEncode = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26)+ 65;
    cipherText += String.fromCharCode(letterEncode).toLowerCase();
  } 
    document.getElementById("inputText").innerHTML = cipherText;
  },

  decode: (offset, string ) => {
    /* Acá va tu código */
  }
  

  }