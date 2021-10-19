function isPositive(num){
    if(num>0){
        return true
    }
    return false 
}

function abs(num){
if (!isPositive(num)){
    if (num == 0){
        return num
    } 
    return num * -1
}
return num
}