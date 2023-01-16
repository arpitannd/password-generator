function upper(rand) {
    let up = 65 + Math.floor(rand * 25)
    return String.fromCharCode(up)
}

function lower(rand) {
    let low = 97 + Math.floor(rand * 25)
    return String.fromCharCode(low)
}

function num(rand) {
    return Math.floor(rand * 10)
}

function symbol(rand) {
    let sym = 33 + Math.floor(rand * 13)
    return String.fromCharCode(sym)
}

let pw = [upper, lower, num, symbol]

const slider = document.querySelector('#strength')
const pass = document.querySelector('#pass')
const up = document.querySelector('#up')
const low = document.querySelector('#low')
const number = document.querySelector('#num')
const sym = document.querySelector('#symbol')
const current = document.querySelector('#current')
const gen = document.querySelector('#generate')

function generate(status) {
    let index = Math.floor(Math.random() * 4)
    while (status[index] !== true) {
        index = Math.floor(Math.random() * 4)
    }
    return pw[index](Math.random())
}

gen.addEventListener('click', () => {
    pass.innerHTML = ''
    let val = slider.value
    current.innerHTML = val
    if (!up.checked && !low.checked && !number.checked && !sym.checked) {
        low.checked = true
    }
    for (let i = 0; i < val; i++) {
        let status = [up.checked, low.checked, number.checked, sym.checked]
        let char = generate(status)
        pass.append(char)
    }
})

slider.addEventListener('input', () => {
    pass.innerHTML = ''
    let val = slider.value
    current.innerHTML = val
    if (!up.checked && !low.checked && !number.checked && !sym.checked) {
        low.checked = true
    }
    for (let i = 0; i < val; i++) {
        let status = [up.checked, low.checked, number.checked, sym.checked]
        let char = generate(status)
        pass.append(char)
    }
})

