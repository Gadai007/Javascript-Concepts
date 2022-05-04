const flat = ( arr = []) => {
    return arr.reduce((flatArr, isFlatten) => {
        return flatArr.concat(Array.isArray(isFlatten)? flat(isFlatten): isFlatten)
    }, [])
}

let arr = [1, [2,3], [[4,5,6]]]
console.log(flat(arr))
