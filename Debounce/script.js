// debounce

let count = 0

const getData = () => {
    console.log('data from server...', count++)
}

const debounce = (fn, delay) => {
    let timer
    return function(){
        let context = this
        let arg = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, arg)
        }, delay)
    }
}

const betterFunction = debounce(getData, 300)



