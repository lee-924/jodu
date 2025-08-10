let a = document.querySelector('.click')
let clickDiv = document.querySelector('.clickDiv')
a.addEventListener('click', () => {
    clickDiv.style.animationPlayState = 'running';
    clickDiv.style.display = 'block'
})

let close = document.querySelector('.close')
close.addEventListener('click', () => {
    clickDiv.style.animationPlayState = 'paused';
    clickDiv.style.display = 'none'
})
