function filter(arr, func) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
       if (func(arr[i], i, arr)) {
           ret.push(arr[i])
       } 
    }
    return ret
}


function reject(arr, func) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i , arr)) {
            ret.push(arr[i])
        }
    }
    return ret
}

function partition(arr, func) {
    var truthy = []
    var falsey = []
    truthy = filter(arr, func)
    falsey = reject(arr, func)
    return [truthy, falsey]
}
