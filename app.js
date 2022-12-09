const screen = document.querySelector('.screen')
const clear = document.querySelector('.reset')
const equal = document.querySelector('.equals')

const btn = document.getElementById('b')

// for (let i = 0; i < btn.length; i++) {

//     btn[i].addEventListener('click', () => {
//         let number = btn[i].getAttribute('data-num')
//         screen.value += number
//         console.log('ur pa')
//     })
    
// }

// for (let i = 0; i < btn.length; i++){

//     btn[i].addEventListener('click', function () {
//         let digit = btn[i].getAttribute('data-num')
//         screen.value += digit
//         console.log('ur pa')
//     })

// }

const keys = document.querySelector('.calculator-body')
// keys.addEventListener('click', e => {
//     const key = e.target
//     if(key.classList === 'btn'){
//         const keyContent = key.textContent
//         screen.value = keyContent
//     }
// })
btn.forEach(button => {
    button.addEventListener('click', () => {
      screen.appendNumber(btn.innerText)

    })
  })


    // const keyContent = key.textContent

// for (let i = 0; i < btn.length; i++) {

// btn.addEventListener('click', function(e){
//     // let tar = e.target 
    
//     // document.appendChild(document.createTextNode(tar))

//     console.log('ur pa')

//     screen.appendchild(document.createTextNode(btn.nodeValue))

//     e.preventDefault
//     })
    
// }

// btn.addEventListener('click', function(e){
//     // let tar = e.target 
    
//     // document.appendChild(document.createTextNode(tar))

//     console.log('ur pa')

//     e.preventDefault
// })


equal.addEventListener('click', () => {
    if(!screen.value){
        return false
    }
    else{

    let answer = eval(screen.value)

    screen.value = answer
    }
})
clear.addEventListener('click', function(){
    screen.value = ''
})

const del = document.querySelector('.del').addEventListener('click', back)
 
function back(){
    if (screen.value.length >= 1 ){
        screen.value = screen.value.toString().slice(0, -1)
    }
}