const screen = document.querySelector('.screen')
const clear = document.querySelector('.reset')
const equal = document.querySelector('.equals')

const btn = document.querySelector('.btn')
for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', () => {
        let number = btn[i].getAttribute('data-num')
        screen.value += number
        console.log('ur pa')
    })
    
}

equal.addEventListener('click', () => {
    let answer = eval(screen.value)

    screen.value = answer
})