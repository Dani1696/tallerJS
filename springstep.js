//DATOS DE ENTRADA
let nombreCliente="Daniela Agudelo";
let numeroZapatosVendidos=0;
let costoIndividualZapatos=0;
const PORCENTAJE1=0.1;
const PORCENTAJE2=0.2;
const PORCENTAJE3=0.5;
let descuento;

//DATOS DE PROCESO

valorCompra=costoIndividualZapatos*numeroZapatosVendidos;

if(numeroZapatosVendidos===3){
    descuento=valorCompra*PORCENTAJE1;
    let totalCompra=valorCompra-descuento;
        console.log(`Gracias por su compra ${nombreCliente}, nuestra tienda te regala el 10% de descuento: El costo total es : ${totalCompra}`);

}else if(numeroZapatosVendidos>3 && numeroZapatosVendidos<=5){
    descuento=valorCompra*PORCENTAJE2;
    let totalCompra=valorCompra-descuento;
       console.log(`Gracias por su compra ${nombreCliente}, nuestra tienda te regala el 20% de descuento: El costo total es : ${totalCompra}`);
    
}else if(numeroZapatosVendidos>5){
    descuento=valorCompra*PORCENTAJE3;
    let totalCompra=valorCompra-descuento;
        console.log(`Gracias por su compra ${nombreCliente}, nuestra tienda te regala el 50% de descuento: El costo total es : ${totalCompra}`);


}else{
    console.log(`No aplica descuento, el valor de su compra es : ${valorCompra}`)
}