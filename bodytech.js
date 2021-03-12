//ENTRADAS DEL PROBLEMA

let nombreUsuario="NOMBRE USUARIO";
let peso=0;
let altura=0;
let IMC=0;
let porcentajePesoCorporal=0;

//DATOS DE PROCESO
porcentajePesoCorporal= peso / (altura*altura);
IMC=porcentajePesoCorporal;


if (IMC<=18,5){
      
      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es : "+IMC+" peso insuficiente");

}else if (IMC>=18,5 || IMC <=24,9 ){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es : "+IMC+" Normopeso");

}else if (IMC >=25 || IMC <=26,9){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es: "+IMC+" sobre peso grado 1");

}else if (IMC >=27 || IMC <=29,9){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es: "+IMC+" sobre peso grado II (preobesidad)");

}else if (IMC >=30 || IMC <=34,9){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es: "+IMC+" obesidad tipo 1");

}else if (IMC >=35 || IMC <=39,9){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es: "+IMC+ " obesidad tipo 2");

}else if (IMC >=40 || IMC <=49,9){

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es : "+IMC+" obesidad se tipo III (mórbida)");

}else {

      //SALIDA
      console.log("Señor(a) "+nombreUsuario+" su clasificación es: "+IMC+" obesidad se tipo IV (extrema)");
}