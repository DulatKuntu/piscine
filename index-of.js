function split(str,find){
    var table = [],res = []
    var i = 0
    var j = 1
    table.push(0)
    while (table.length != find.length){
        if (find[i] == find[j]){
            table.push(i+1)
            i++
            j++
        }else{
            if (i==0){
                table.push(0)
                j++
            }else{
                i = table[i-1]
            }
        }
    }
    i=0
    j=0
    while (i<str.length){
        if (str[i]==find[j]){
            if (j==find.length-1){
                res.push(i-find.length+1)
                j=0
            }else{
                i++
                j++
            }
        }else{
            if (j==0){
                i++
            }else{
                j = table[j-1]
            }
        }

    }
    console.log(res)
}

function join(arr, div){
    var le = arr.length
    var str
    if (le>0){
        str = arr[0]
    }else{
        return str
    }
    if (div==null){
        div = ','
    }
    var i
    for (i = 1;i<arr.length;i++){
        str = str + div + arr[i]
    }
    
    return str
}
console.log(split("As Yuo wish", "u"), join(["AV", "asd", "asdw"],""))