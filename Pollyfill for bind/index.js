//polyfill for bind

let a = {
    name: 'Debayan'
}

let nameFunc = function(place, state){
    console.log(`my name is ${this.name} from ${place}, ${state}`)
}

Function.prototype.mybind = function(obj, ...args){
    let func = this
    return function(...newArgs){
        func.apply(obj, [...args,...newArgs])
    }
}

let solFunc = nameFunc.mybind(a, 'Agartala')
solFunc('Tripura')