(function () {

    let actualizarHora = function () {
        let fecha = new Date (),
            horas = fecha.getHours(),ampm,
            minutos= fecha.getMinutes(),
            segundos= fecha.getSeconds(),
            diaSem= fecha.getDay(),
            dia= fecha.getDate(),
            mes= fecha.getMonth(),
            año= fecha.getFullYear();


let pHoras = document. getElementById( " horas"),
    pAmpm = document.getElementById ( " ampm "),
    pMinutos = document.getElementById ( "minutos"),
    pSegundos= document.getElementById ( " segundos"),
    pDiaSemana=  document.getElementById( " diaSem"),
    pDia=document.getElementById("dia"),
    pMes=document.getElementById("mes"),
    pAño=document.getElementById("año");

    let semana =[ "Domingo", "Lunes","Martes","Miércoles", "Jueves"," Viernes","Sábado"];


 pDiaSemana.textContent =semana [ diaSem];
pDia.textContent = dia;

let meses = [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
pMes.textContent = meses [mes];
pAño.textContent = año;

if (horas>=12) {horas = horas - 12;
    ampm = "PM";
    
} else { ampm = "AM";}
if (horas == 0) { horas = 12
    
};
pHoras.textContent = horas;
pAmpm.textContent= ampm;

if ( minutos < 10){ minutos = "0" + minutos};
if( segundos < 10){ segundos = 0};
pMinutos.textContent= minutos;
pSegundos.textContent= segundos;

  

};

actualizarHora();
let intervalo = setInterval( actualizarHora ,1000)





})