window.onload = () => {
// almacenando valor del texto a codificar 
  const btnCipher = document.getElementById('btn-cipher');
  btnCipher.addEventListener('click', () => {
    let encodeText = document.getElementById('inputText').value;
    let position = document.getElementById('offset').value;
    window.cipher.encode(encodeText, position);
    document.getElementById("txt").innerHTML = window.cipher.encode(encodeText, position);
  });
// almacenando valor del texto a decodificar 
const btnDecipher = document.getElementById('btn-decipher');
btnDecipher.addEventListener('click', () => {
  let decodeText = document.getElementById('inputText').value;
  let position = document.getElementById('offset').value;
  window.cipher.decode(decodeText, position);
  document.getElementById("txt").innerHTML = window.cipher.decode(decodeText, position);
});
} 

   
    








