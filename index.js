let a = document.querySelector('.click')
let clickDiv = document.querySelector('.clickDiv')
let mb = document.querySelectorAll('.miniBox')
a.addEventListener('click', () => {
    clickDiv.style.animationPlayState = 'running';
    clickDiv.style.display = 'flex'
    mb.forEach((ind) => {
setTimeout(() => {
        ind.style.display = 'flex'
    },1200)
})
    })
    

let close = document.querySelector('.close')
close.addEventListener('click', () => {
    clickDiv.style.animationPlayState = 'paused';
    clickDiv.style.display = 'none'
    mb.forEach((ind) => {
                ind.style.display = 'none'
})
})

let tapGameBtn = document.querySelector('.tapGame')
tapGameBtn.addEventListener('click', () => {
    window.location.href = '../Pages/tapCounter.html'
})


