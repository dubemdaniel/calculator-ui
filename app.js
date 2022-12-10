const screen = document.querySelector('.screen')

const clear = document.querySelector('.reset')

const equal = document.querySelector('.equals')

const btn = document.querySelectorAll('#b')

const keys = document.querySelector('.calculator-body')


// btn.forEach(button => {
//     button.addEventListener('click', function(e) {
//       console.log('it work')

//     //   screen.textContent = btn.innerHTML

//     let tar = e.target.value

//     screen.appendChild(document.createTextNode(tar))

//       console.log(tar)
//     })
//   })

// const div = document.getElementsByTagName('div')
// const buttons = document.getElementsByTagName('button')
// const h3 = document.getElementsByTagName('h3')

// // document.appendChild(document.createTextNode(tar))
// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', function () {
//         let digit = btn[i].getElementsByTagName('button').textNode
//         screen.value += digit
//         console.log('ur pa')
//         console.log(h3.value)
//     })
// }


btn.addEventListener('click', function(e){
    if (e.target.attribute('data-num')){
        console.log('ur pa')
    }
    e.preventDefault
})



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

// const norm = document.querySelector('.norm')
// norm.addEventListener('click' , function(e){
//     console.log(e.target.value)

//     let tar = e.target.value

//     screen.appendChild(document.createTextNode(tar))
// })