function reverse(element){
    var le = element.length
    var str = []
    var str1 = ""
    var i = 0
    var or = false
    if (typeof element ==="string"){
        or = true
    }
    if(or){
        for (i=0;i<le;i++){
            str1 = element[i] + str1
        }
        return str1
    }else{
        for (i=0;i<le;i++){
            str.push(element.pop())
        }
        
        for (i=0;i<le;i++){
            element.push(str.shift())
        }
    }
    
    return element
}