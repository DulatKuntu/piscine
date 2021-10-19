function pick(obj,keys){
    var arr = []
    var key = []
    if(typeof keys == 'string'){
        key[0] = keys
    }else{
        key = keys
    }
    for(var i =0;i<key.length;i++){
        if(obj.hasOwnProperty(key[i])){
            arr.push([key[i],obj[key[i]]]) 
            
        }
    }
    
    return Object.fromEntries(arr)
}
function omit(obj,keys){
    var arr = []
    var key = []
    var j =0
    if(typeof keys == 'string'){
        key[0] = keys
    }else{
        key = keys
    }
    var arr1 = Object.getOwnPropertyNames(obj)
    for(var i =0;i<arr1.length;i++){
        if(key[j]!=arr1[i]){
            arr.push([arr1[i],obj[arr1[i]]])
        }else{
            j++
        }
        
    }
    return Object.fromEntries(arr)
}