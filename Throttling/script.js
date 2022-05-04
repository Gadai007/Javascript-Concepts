const height = document.querySelector('#height')
const width = document.querySelector('#width')

const resize = () => {
    height.textContent = window.innerHeight
    width.textContent = window.innerWidth
}

window.addEventListener('resize', () => {
    resize()
    betterFunc()
})

const throttleLog = () => {
    console.log('api call....')
}

const throttling = (fn, delay) => {
    let flag = true
    return function(){
        let context = this
        let args = arguments
        if(flag){
            fn.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

const betterFunc = throttling(throttleLog, 400)



