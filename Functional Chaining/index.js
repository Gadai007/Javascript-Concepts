const Math = (init = 0) => {
    let result = init

    return {
        add(...args){
            result = args.reduce((curr, acc) => curr + acc, result)
            return result
        },
        subtract(...args){
            result = args.reduce((curr, acc) => curr - acc, result)
            return result

        },
        multiply(multiplier){
            result = result * multiplier
            return result
        },
        divide(divisor){
            result = result / divisor
            return result
        }
    }
}

//Another approach with chaining

const Math1 = (init = 0) => {
    let result = init

    const ops =  {
        add(...args){
            result = args.reduce((curr, acc) => curr + acc, result)
            return ops
        },
        subtract(...args){
            result = args.reduce((curr, acc) => curr - acc, result)
            return ops

        },
        multiply(multiplier){
            result = result * multiplier
            return ops
        },
        divide(divisor){
            result = result / divisor
            return ops
        },
        getResult(){
            return result
        }
    }

    return ops
}

const math = Math()
math.add(10, 20)
math.multiply(3)
math.subtract(10, 20, 8)
const result = math.divide(2)
console.log(result)

function ComputeAmount(){
    let result = 0

    let obj = {
        thousand (n){
            result += n*1000
            return obj
        },
        lacs(n){
            result += n*100000
            return obj
        },
        crores(n){
            result += n*10000000
            return obj
        },
        value(){
            return result
        }
    }
    return obj
}


class ComputeAmount2{
    constructor(){
        this.result = 0
    }
    thousand (n){
        this.result += n*1000
        return this
    }
    lacs(n){
        this.result += n*100000
        return this
    }
    crores(n){
        this.result += n*10000000
        return this
    }
    value(){
        return this.result
    }

}

let computeAmount = ComputeAmount()

let computeAmount2 = new ComputeAmount2()



// console.log(computeAmount.thousand(55).lacs(45).crores(43).lacs(14).crores(23).thousand(1).value())
// console.log(computeAmount2.thousand(55).lacs(45).crores(43).lacs(14).crores(23).thousand(1).value())

