function split(str, separator) {
    var indeces = []
    var from = 0

    if (str.indexOf(separator) != 0) {
        indeces.push(0)
    }
    while (from != -1) {

            from = str.indexOf(separator, from)
            if (from != -1) {
                indeces.push(from)
                indeces.push(from+separator.length)
            } else {
                break
            }
            from++
    }
    indeces.push(str.length)

    var ret = []

    for (var j = 0; j < indeces.length-1; j++) {
        var t = ''
        for (var k = indeces[j]; k < indeces[j+1]; k++) {
            t += str[k]
        }
        ret.push(t)
    }

    var real = []

    for (var h = 0; h < ret.length; h++) {
        if (ret[h]===separator) {
            continue
        } else {
            real.push(ret[h])
        }
    }

    return real
}



function join(arr, joiner) {
    var ret = ''

    ret = arr[0]

    for (var i = 1; i < arr.length; i++) {
        ret += joiner
        ret += arr[i]
    }
    return ret
}