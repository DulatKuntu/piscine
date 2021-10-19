function adder(arr, opt) {
    var init = 0;
    if (opt !== undefined) {
        init = opt
    }
    const reducer = (a, b) => a+b;
    return arr.reduce(reducer, init) 
}

function sumOrMul(arr, opt) {
    var init = 0;
    if (opt !== undefined) {
        init = opt
    }

    return arr.reduce(function(accumulator, currentValue, currentIndex, array){
        return (currentValue)%2 === 0 ? accumulator * currentValue : accumulator + currentValue
    }, init)
}


function funcExec(arr, opt) {
    var init = 0;
    if (opt !== undefined) {
        init = opt
    }
    var reducer = (a, b) => {
        return b(a)
    }
    return arr.reduce(reducer, init)
}
