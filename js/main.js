const somar = document.getElementById('somar')
const subtrair = document.getElementById('subtrair')
const braco = document.querySelector('#braco')

somar.addEventListener('click', () => {manipulaDados("somar")})

subtrair.addEventListener('click', () => {manipulaDados("subtrair")})

function manipulaDados(operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
