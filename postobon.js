
let nombreEmpleado="Daniela Agudelo";
let horasTrabajadas=40;
let valorHoraNormal=20000;
let valorHoraExtra=25000;
let totalHorasNormal=0;
let totalHorasExtras=0;


if(horasTrabajadas<=40){

     let totalDevengado=valorHoraNormal*horasTrabajadas;
     console.log(`Señor(a): ${nombreEmpleado} su salario total es de: $ ${totalDevengado}`);

}else{

    totalHorasNormal=valorHoraNormal*40;
    totalHorasExtras=valorHoraExtra*(horasTrabajadas-40);

    let totalDevengado=totalHorasNormal+totalHorasExtras;

    console.log(`Señor(a): ${nombreEmpleado} su salario total es de: $ ${totalDevengado}`);


}