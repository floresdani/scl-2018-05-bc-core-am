/* Acá va tu código */

window.onload = () => {
// almacenando valor del texto a codificar 
const btnCipher = document.getElementById('btn-cipher');
btnCipher.addEventListener("click", () => {
   let codeText = document.getElementById("inputText").value;
   let position = document.getElementById("offset").value;
   window.cipher.encode(position,codeText);
});
// almacenando valor del texto a decodificar 
const btnDecipher = document.getElementById('btn-decipher');
btnDecipher.addEventListener("click", () => {
  let decodeText = document.getElementById("inputText").value;
  let document.getElementById("offset").value;
  window.cipher.enconde(position,decodeText);
});
}

   
    








