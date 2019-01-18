window.cipher = {

encode: (offsetIngresado, messageIngresado) => {

   let messageImpreso= "";
   let i = 0;
   let letraMayus= messageIngresado.toUpperCase();
  // console.log(letraMayus)

   //messageIngresado= messageIngresado.toUpperCase();

    for (i=0; i<letraMayus.length; i++) {

       let letraAscii= letraMayus.charCodeAt(i);
       let formula= (letraAscii - 65 + parseInt(offsetIngresado)) %26 + 65;
       let messageCipher= String.fromCharCode(formula);


      messageImpreso+=messageCipher;
     }

//console.log(messageImpreso)
return messageImpreso
}
}
// },
//
// decode: => {}
//
//
//
//
// }
