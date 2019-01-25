
//pedir al documento que me invoque el id del botton de cifrar de nombre "bottonCipher"
//El addEventListener dispara un evento de tipo click, significa que cuando de click
//  realiza la funcion que este dentro de click
document.getElementById("bottonCipher").addEventListener("click",()=>{

  let offsetIngresado= document.getElementById("offset").value;
  let messageIngresado= document.getElementById("message").value;
  let codificado= window.cipher.encode(offsetIngresado, messageIngresado);
  document.getElementById('reemplazo').innerHTML = codificado;
});

document.getElementById("bottonDecipher").addEventListener("click",()=>{

  let offsetIngresado= document.getElementById("offset").value;
  let messageIngresado= document.getElementById("message").value;
  let codificado2= window.cipher.decode(offsetIngresado, messageIngresado);
  document.getElementById('reemplazo').innerHTML = codificado2;
});
