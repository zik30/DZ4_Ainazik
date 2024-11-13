let result = document.querySelector('.result');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let count = 0

plus.addEventListener('click', () => {
    count++;
    result.innerHTML = count
    result.style.color = "green"
})
minus.addEventListener('click', () => {
    if(count > 0){
        count--
        result.innerHTML = count
        result.style.color = "red"
    }
})



const block = document.querySelector('.block');
const coord = document.querySelector('.coordination');

block.addEventListener('mousemove', (e) =>{
    const x = e.offsetX
    const y = e.offsetY
    coord.textContent = `X: ${x}, Y: ${y}`;
})




const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

const Traffic = (color) => {
    color = color.toLocaleLowerCase()
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')

    if(color === 'red'){
        red.classList.add('active')
        return alert("stop")
    }
    else if(color === 'yellow'){
        yellow.classList.add('active')
        return alert("wait")
    }
    if(color === 'green'){
        green.classList.add('active')
        return alert("go")
    }else{
        return alert('error')
    }
}
const write = prompt('The traffic light color (red / yellow / green)')
Traffic(write)