function fold(arr, func, acc) {
    for (var v = 0; v < arr.length; v++ ) {
        acc = func(acc, arr[v])
    }
    return acc
}

function foldRight(arr, func, acc) {
    for (var i = arr.length -1; i >= 0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}

function reduce(arr, func, acc) {
    var init = arr[0];
    if (acc !== undefined) {
        init = acc
    }

    for (var i =1; i < arr.length; i++) {
        init = func(init, arr[i])
    }
    return init
}


function reduceRight(arr, func, acc) {
    var init = arr[arr.length-1];
    if (acc !== undefined) {
        init = acc
    }

    for (var i =arr.length-2; i >= 0; i--) {
        init = func(init, arr[i])
    }
    return init
}

