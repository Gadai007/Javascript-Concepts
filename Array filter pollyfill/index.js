Array.prototype.myfilter= function(callback){
    let result = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}


let arr = [1,2,4]
console.log(arr.myfilter(item => item % 2 ===0 ))