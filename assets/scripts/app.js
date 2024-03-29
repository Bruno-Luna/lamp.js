const interruptorDesligado = document.querySelector('.desligar')
const interruptorLigado = document.querySelector('.ligar')
const lampada = document.querySelector('#lampada')

let idHora = document.getElementById('hora')
let data = new Date()

const ligar = () => {
        lampada.setAttribute('style', 'background-image: url("https://raw.githubusercontent.com/Bruno-Luna/lamp.js/master/img/ligada.jpg")')
        interruptorLigado.setAttribute('style', 'background-color: white;')
        interruptorDesligado.setAttribute('style', 'border: 2px solid white;')
}

const desligar = () => {
        lampada.setAttribute('style', 'background-image: url("https://raw.githubusercontent.com/Bruno-Luna/lamp.js/master/img/desligada.jpg")')
        interruptorDesligado.setAttribute('style', 'background-color: white;')
        interruptorLigado.setAttribute('style', 'border: 2px solid white;')
}

const exibirHora = () => {
        const horaAtual = `Horário de acesso: ${data.getHours()}:${data.getMinutes()}`
        idHora.textContent = horaAtual
        idHora.style.color = 'black'
}

const verificarHora = () => {
    const ehDia = data.getHours() >= 6 && data.getHours() < 18

    if(ehDia){
        return desligar()
    }

    ligar()
}

exibirHora(verificarHora())

interruptorLigado.addEventListener('click', ligar)
interruptorDesligado.addEventListener('click', desligar)