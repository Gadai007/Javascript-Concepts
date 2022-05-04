//basic currying

const basicSum = (...args) => {
    const storage = [...args]
    if(storage.length === 4){
        return storage.reduce((acc, curr) => acc + curr, 0)
    }else{
        const temp = function(...args2){
            storage.push(...args2)
            if(storage.length === 4){
                return storage.reduce((acc, curr) => acc + curr, 0)
            }else{
                return temp
            }
        }
        return temp
    }
}

const res = basicSum(1, 2, 3, 4);
const res2 = basicSum(1)(2)(3)(4);
const res3 = basicSum(1, 2)(3, 4);
const res4 = basicSum(1, 2, 3)(4);
const res5 = basicSum(1)(2, 3, 4);
console.log(res, res2, res3, res4, res5)


//update the code to return the value when invoked with empty arguments.

const sum = function(...args){
    const storage = [...args]
    if(storage.length === 0){
        return 0
    }else{
        const temp = function(...args2){
            storage.push(...args2)
            if(args2.length === 0){
                return storage.reduce((acc, curr) => acc + curr, 0)
            }else{
                return temp
            }
        }
        return temp
    }
}

sum(1, 2, 3, 4)();
sum(1)(2)(3)(4)();
sum(1, 2)(3, 4)();
sum(1, 2, 3)(4)();
sum(1)(2, 3, 4)();
sum();

