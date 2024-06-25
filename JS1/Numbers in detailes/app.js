//const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 1460)

// const date = new Date(2011, 0, 1)

// console.log(now.getMilliseconds())

// now.setFullYear(3099)

// console.log(now.toDateString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

//=========================================
//now = new Date()
let format = 'time'
const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')

function bindMode(name){
    return function(){
        format = name
        update()
    }
}

full.onclick = bindMode('full')

date.onclick = bindMode('date')

time.onclick = bindMode('time')

output.textContent = formatD(format)

setInterval(() => {
    // return tm
    update()
}, 1000)

function update(){
    output.textContent = formatD(format)

}

function formatD(formatmode){
    const now = new Date()
    switch(formatmode){
        case 'time': 
            return now.toLocaleTimeString()
        case 'date': 
            return now.toLocaleDateString()
        case 'full': 
            return now.toLocaleTimeString() + ' ' + now.toLocaleDateString()
        default:
            return now.toLocaleTimeString()
    }
}
