
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        //console.log(evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.pecas)
    })
}) 

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    //console.log(pecas[peca]) teste para verificar se os status do robo aparecem corretamente

    estatisticas.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica)  teste para verificar se esta percorrendo o elemento html
        //console.log(elemento.textContent)          teste para verificar o conteudo do texto que nesse caso seria força, energia...

        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}

const mudaCor = document.querySelector('#mudacor')
const corRobos = document.querySelector('#corRobos')

mudaCor.addEventListener('click', () => {

})
