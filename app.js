const screen = document.querySelector('.screen')

const clear = document.querySelector('.reset')

const equal = document.querySelector('.equals')

const btn = document.querySelectorAll('#b')

const keys = document.querySelector('.calculator-body')


btn.forEach(button => {
    button.addEventListener('click', function() {
      console.log('it work')
        screen.value += button.textContent
    })
  })




// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', function () {
//         let digit = btn[i].getElementsByTagName('button').textNode
//         screen.value += digit
//         // console.log(h3.value)
//     })
// }




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
