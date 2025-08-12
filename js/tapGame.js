let counter = document.querySelector('.counter')
let hiddenDiv = document.querySelector('.clickDiv')


let count = 99;
console.log(count)
let bar = document.querySelector('.bar')

funtion click() {
counter.addEventListener('pointerdown', () => {
    count += 1
    bar.style.height = `${count}%`
    bar.style.width = `${count}%`
    let counterr = document.querySelector('.count');
    counterr.innerHTML = count; 

if (count === 100) {
    
    counter.style.background = 'white'
    counter.innerHTML = 'YOU DID IT!'
    counter.style.color= 'black'
    count = 0;
    hundred()
   
}
}) }

function hundred() {
    console.log('YOU DID IT')
    hiddenDiv.style.display = 'flex'
    hiddenDiv.style.animationPlayState = 'running'
}

let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
    hiddenDiv.style.display = 'none'
})

let resetCount = document.querySelector('.resetCount')
resetCount.addEventListener('click', () => {
    count = 0; 
})