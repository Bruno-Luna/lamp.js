let idHora = document.getElementById('hora')
let hora = new Date

const interruptorLigado = document.querySelector('.ligar')
const interruptorDesligado = document.querySelector('.desligar')
const black = 'black'

const ligar = () => {
        document.getElementById('lampada').style.backgroundImage = 'url("img/ligada.jpg")'
        interruptorLigado.setAttribute('style', 'background-color: white;')
        interruptorDesligado.setAttribute('style', 'border: 2px solid white;')

}
    
const desligar = () => {
        document.getElementById('lampada').style.backgroundImage = 'url("img/desligada.jpg")'
        interruptorDesligado.setAttribute('style', 'background-color: white;')
        interruptorLigado.setAttribute('style', 'border: 2px solid white;')
}


const capturarHora = () => {
        idHora.textContent = 'Hora atual: ' + hora.getHours() + ':' + hora.getMinutes()
        idHora.style.color = black
}

const verificadorHora = () => {
    if(hora.getHours() >= 6 && hora.getHours() < 18){
        return desligar()
    }else if(hora.getHours() >= 18 || hora.getHours() < 6 ){
        return ligar()
    }
}

capturarHora(verificadorHora())