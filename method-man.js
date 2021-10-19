function words(str){
    var part = ""
    var arr = []
    for (let letter of str){
        if (letter ==' '){
            arr.push(part)
            part = ""
        }else{
        part = part + letter

        }
    }
    arr.push(part)
    return arr
}

function sentence(arr){
    var str = ""
    let i = 0
    let le = arr.length
    for (let part of arr){
        i++
        if (i==le){
            str = str + part 
        }else{
        str = str + part + " "
        }
    }
    return str
}

function yell(str){
    return str.toUpperCase()
}

function whisper(str){
    str = str.toLowerCase()
    return "*" + str + "*"
}
function capitalize(str){
    let cap,tail = ""
   let i = 0
    for (let first of str){
        if (i==0){
            cap = first
        }else{
            tail = tail + first
        }
        i++
    }
    str = yell(cap) + tail.toLowerCase()
    return str
}