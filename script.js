const dias = document.querySelector("#dia")
const horas = document.querySelector("#hora")
const minutos = document.querySelector("#minuto")
const segundos = document.querySelector("#segundo")

const lanc = "22 feb 2023"


function countDown() {
    const dataLanc = new Date(lanc)
    const hoje = new Date()
    const segundoTotal = (dataLanc - hoje)/1000
    
    const diasRestantes = Math.floor(((segundoTotal/60)/60)/24);
    const horasRestantes = Math.floor(((segundoTotal/60)/60) % 24);
    const minutosRestantes = Math.floor(((segundoTotal/60) % 60));
    const segundosRestantes = Math.floor((segundoTotal % 60));
    
    dias.innerHTML = formatoTempo(diasRestantes) + "D"
    horas.innerHTML = formatoTempo(horasRestantes) + "H"
    minutos.innerHTML = formatoTempo(minutosRestantes) + "M"
    segundos.innerHTML = formatoTempo(segundosRestantes) + "S"
}


function formatoTempo(tempo) {
   return tempo < 10 ? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)
    


