Array.prototype.mymap = function(callback){
    let result = []
    for(let i = 0; i < this.length; i++){
        if(this.indexOf(this[i]) > -1){
            result[i] = callback(this[i], i, this)
        }
    }
    return result
}

let arr = [1,2,3]
console.log(arr.mymap(item => item * 2))