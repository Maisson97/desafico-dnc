const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')




const lancamento = "04 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;
     //dividi por mil para transformar milisegundos em segundos
    //converter segundo em dias 90.000/60/60/24
    //segundos em horas totais 90.000/60/60
    //segundos em horas 90.000/60/60%24
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000)