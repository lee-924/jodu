let counter = document.querySelector('.counter')


let count = 0;
console.log(count)
let bar = document.querySelector('.bar')
counter.addEventListener('pointerdown', () => {
    count += 1
    bar.style.height = `${count}%`
    bar.style.width = `${count}%`
    let counterr = document.querySelector('.count');
    counterr.innerHTML = count;

if (count === 100) {
    count = 0;
    hundred()
}
})

function hundred() {
    console.log('YOU DID IT')
}
