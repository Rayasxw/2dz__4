

// 1 COUNTER
const counter = () => {
    const title = document.querySelector(".count")
    const plus = document.querySelector(".plus")
    const minus = document.querySelector(".minus")

    let count = 0

    const increment = () => {
        count++
        title.innerHTML = count
    }
    const decrement = () => {
        if(count > 0) {
            count--
        }else {
            count = 0
        }
    
        title.innerHTML = count
    }

        plus.onclick = () => increment()
        minus.onclick = () => decrement()

}
counter()

// 2 MOUSE CURSOR 

const box = document.querySelector(".box")
const offsetX = document.querySelector(".offsetX")
const offsetY = document.querySelector(".offsetY")


box.addEventListener('mousemove', (e) => {
    const x = e.offsetX
    const y = e.offsetY
    offsetX.textContent = x
    offsetY.textContent = y
})

// 3 TRAFFIC LIGHT

const redLight = document.querySelector("#redLight")
const yellowLight = document.querySelector("#yellowLight")
const greenLight = document.querySelector("#greenLight")


const trafficLight = (title = prompt('Выберите один из цветов цветофора').toLowerCase().trim()) => {
    if(title === 'красный') {
        redLight.classList.add('active')
        redLight.textContent = 'STOP'
    }else if(title === 'желтый'){
        yellowLight.classList.add('active')
        yellowLight.textContent = 'WAIT'
    }else if (title === 'зеленый') {
        greenLight.classList.add('active')
        greenLight.textContent = 'GO'
    }else {
        alert('Выберите один из цветов цветофора')
    }

}
trafficLight()
