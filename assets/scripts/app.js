let idHora = document.getElementById('hora')
let hora = new Date

const interruptorLigado = document.querySelector('.ligar')
const interruptorDesligado = document.querySelector('.desligar')
const black = 'black'

const ligar = () => {
        document.getElementById('lampada').style.backgroundImage = 'url("/assets/img/ligada.jpg")'
        interruptorLigado.setAttribute('style', 'background-color: white;')
        interruptorDesligado.setAttribute('style', 'border: 2px solid white;')
}
    
const desligar = () => {
        document.getElementById('lampada').style.backgroundImage = 'url("/assets/img/desligada.jpg")'
        interruptorDesligado.setAttribute('style', 'background-color: white;')
        interruptorLigado.setAttribute('style', 'border: 2px solid white;')
}

const exibirHora = () => {
        const horaAtual = `Horário de Brasília: ${hora.getHours()}:${hora.getMinutes()}`
        idHora.textContent = horaAtual
        idHora.style.color = black
}

const verificarHora = () => {
    const ehDia = hora.getHours() >= 6 && hora.getHours() < 18

    if(ehDia){
        return desligar()
    }

    return ligar()
}

exibirHora(verificarHora())

interruptorLigado.addEventListener('click', ligar)
interruptorDesligado.addEventListener('click', desligar)