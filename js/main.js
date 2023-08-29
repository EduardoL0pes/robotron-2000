
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos":{
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem":{
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
        //console.log(evento.target.parentNode)  //retorna a div controle
        atualizaEstatistica(evento.target.dataset.pecas)
    })
}) 

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    //console.log(controle)
    //console.log(operacao)
    let valorAtual = Number(peca.value, 10)

    console.log("Operação:", operacao);
    console.log("Valor Atual:", valorAtual);
    console.log("Peca:", peca.parentNode.dataset.pecas);

    if(operacao === "-") {
        if(valorAtual > 0){
            peca.value = valorAtual - 1
        }
    } else {
        peca.value = valorAtual + 1
    }
}

function atualizaEstatistica(peca) {
    //console.log(pecas[peca]) //teste para verificar se os status do robo aparecem corretamente
    

    estatisticas.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica)  //teste para verificar se esta percorrendo o elemento html
        //console.log(elemento.textContent)          //teste para verificar o conteudo do texto que nesse caso seria força, energia...

        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}

const robos = document.querySelectorAll('.robo');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

let currentSlide = 0;

function hideSlider() {
    robos.forEach(item => item.classList.remove('on')) 
}

function showSlider() {
    robos[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide === robos.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = robos.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
