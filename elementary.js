function isPositive(num){
    if (num > 0){
        return true
    }
    return false
}
function multiply(num1,num2){
    var i,res
    var neg = false
    res = 0
    if (!isPositive(num2)){
        num2 = -num2
        neg = true
    }
    for (i = 0;i<num2;i++){
        res = res+num1
    }
    if(neg){
        res = -res
    }
    return res
}

function divide(num1,num2){
    var i = 0
    var neg = false
    if (!isPositive(num1)){
        num1 = -num1
        neg = !neg
    }
    if (!isPositive(num2)){
        num2 = -num2
        neg = !neg
    }
    while (num1>num2){
        num1 = num1-num2
        i++
    }
    if (neg){
        i = -i
    }
    return i
}

function modulo(num1,num2){
    var neg = false
    if (!isPositive(num1)){
        num1 = -num1
        neg = true
    }
    if (!isPositive(num2)){
        num2 = -num2
    }
    while (num1>=num2){
        num1 = num1-num2
    }
    if(neg){
        num1 = -num1
    }
    return num1
}