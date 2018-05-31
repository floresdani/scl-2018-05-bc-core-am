window.onload = () => {
// almacenando valor del texto a codificar 
const btnCipher = document.getElementById('btn-cipher');
btnCipher.addEventListener("click", () => {
  let codeText = document.getElementById("inputText").value;
  let position = document.getElementById("offset").value;
  cipher.encode(position,codeText);
});
// almacenando valor del texto a decodificar 
const btnDecipher = document.getElementById('btn-decipher');
btnDecipher.addEventListener("click", () => {
  let decodeText = document.getElementById("inputText").value;
  document.getElementById("offset").value;
  cipher.enconde(position,decodeText);
});
}

   
    








