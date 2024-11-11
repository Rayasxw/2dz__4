

// // DOM 

// // const h1 = document.getElementById("name")

// // const h2 = document.getElementsByClassName("title")

// // const firstElement = h2[0];

// // firstElement.style.color = 'red'

// // const button = getElementsByTagName("button")

// const element = document.querySelector('#name')
// const element2 = document.querySelector('.title')
// const element3 = document.querySelector('button')

// const elements = document.querySelectorAll('.title')

// // const arr = [1, 2, 3, 4, 5 ]

// // const newArr = arr.map((el, ind, ar) => {
// //    return {
// //     id: 'el',
// //     key:'ind',
// //     arr: 'ar'
// //    }
    
// // })

// // const forEl = arr.forEach((el, ind, ar) => {
// //     console.log(el, ind, ar);
    
// // })


// // console.log(newArr);
// // elements.forEach((el, ind) => {
// //     if(ind === 0){
// //         el.style.color = 'red'
// //     }else {
// //         el.style.color = 'blue'
// //     }
// // })

// // document.addEventListener("click" , (e) => {
// //     console.log(e, "event");
    
// // })

// const btn = document.querySelector("button")

// // btn.addEventListener("click", () => {
// //     console.log("button clicked");
    
// // })
// const title = document.querySelector("#name")
// // let count = 0

// // title.innerHTML = count;

// // const btnClick = () => {
// //     count++;
// //     title.innerHTML = count;
// // }
// // btn.onclick = () => btnClick()
// // btn.addEventListener("click", btnClick)
// const input = document.querySelector("input")

// input.oninput = (e) => title.innerHTML = e.target.value;

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
    }else if(title === 'желтый'){
        yellowLight.classList.add('active')
    }else if (title === 'зеленый') {
        greenLight.classList.add('active')
    }else {
        alert('Выберите один из цветов цветофора')
    }

}
trafficLight()