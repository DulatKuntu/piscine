function invert(obj){
    var arr = []
    for (let [key,value] of Object.entries(obj)){
        arr.push([value,key])
    }
    obj = Object.fromEntries(arr)
    return obj
}

