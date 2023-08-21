const somar = document.getElementById('somar')
const subtrair = document.getElementById('subtrair')
const braco = document.querySelector('#braco')

somar.addEventListener('click', () => {
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener('click', () => {
    braco.value = parseInt(braco.value) - 1
    if(braco.value <= 0) {
        braco.value = 0
    }
})
