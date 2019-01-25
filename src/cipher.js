window.cipher = {

encode: (offsetIngresado, messageIngresado) => {

   let messageImpreso= "";
   let i = 0;
   let letraMayus= messageIngresado.toUpperCase();
  // console.log(letraMayus)

   //messageIngresado= messageIngresado.toUpperCase();
   //messageIngresado= messageIngresado.toUpperCase();
//bucle for comienza iterando letra por letra , la pasa por la variable "letra ascii " y la convierte a codigo ascii ,
//despues la pasa por la variable de  nombre "formula= letra ascii +65 - parseInt", lo cual hace que se sume el offset ingresado
//y tendra un nuevo valor que sera una posicion en codigo ascii
    for (i=0; i<letraMayus.length; i++) {

       let letraAscii= letraMayus.charCodeAt(i);
       let formula= (letraAscii - 65 + parseInt(offsetIngresado)) %26 + 65;
       let messageCipher= String.fromCharCode(formula);

       //aun dentro de for, pasa por la variable "string.fromCharCode" para buscar e identificar la letra que tiene esa posicion en ascii
       //
      messageImpreso+=messageCipher;

    }

return messageImpreso

},


decode: (offsetIngresado, messageIngresado) => {

   let messageImpreso= "";
   let i = 0;
   let letraMayus= messageIngresado.toUpperCase();

  // console.log(letraMayus)


    for (i=0; i<letraMayus.length; i++) {

       let letraAscii= letraMayus.charCodeAt(i);
       let formula= (letraAscii + 65 - parseInt(offsetIngresado)) %26 + 65;
       let messageDeCipher= String.fromCharCode(formula);




      messageImpreso+=messageDeCipher;

    }
  return messageImpreso
    }
    }
