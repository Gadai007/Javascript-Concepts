const Adder = () => {
    let result = 0
    return (...args) => {
        result = args.reduce((curr, acc) => curr + acc, result)
        return result
    }
}

const add = Adder()
add(10)
add(10, 20, 30)
const result = add(10, 10, 10)
console.log(result)

//https://www.youtube.com/watch?v=ATo3OAdFAk4
