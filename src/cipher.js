window.cipher = {
  encode: (inputText, offset ) => {
  //string que voy a recibir  
    let cipherText = ''; 
  //Recorrido de caracteres
    for(let i = 0; i < inputText.length; i++){ 
      if ( 65 <= inputText.charCodeAt(i) && inputText.charCodeAt(i) <= 90 ){
        let letterEncode = ((inputText.charCodeAt(i) - 65 + parseInt(offset)) % 26)+ 65;
        cipherText += String.fromCharCode(letterEncode);
      }else { 
        cipherText += inputText.charAt(i)};
    }
      return cipherText;
},

  decode: (inputText, offset) => {
    //string que voy a recibir
    let decipherText = '';
    //Recorrido de caracteres
    for(let i = 0; i < inputText.length; i++){
      if ( 65 <= inputText.charCodeAt(i) && inputText.charCodeAt(i) <= 90 ){
        let letterDecode = ((inputText.charCodeAt(i) + 65 - parseInt(offset)) % 26)+ 65;
        decipherText += String.fromCharCode(letterDecode);
      }else { 
        decipherText += inputText.charAt(i)};
      }
      return decipherText;
    }
}