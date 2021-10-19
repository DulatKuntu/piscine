function filterKeys(obj,func){
    var arr = []
    for(const [key,value] of Object.entries(obj)){
        arr.push([key,value])
    }
    var arr1 = filter(arr,func)
    return Object.fromEntries(arr1)
}
function filter(arr, func) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
       if (func(arr[i][0], i, arr)) {
           ret.push([arr[i][0],arr[i][1]])
       } 
    }
    return ret
}

function mapKeys(obj,func){
var arr = []
for(const [key,value] of Object.entries(obj)){
    arr.push([key,value])
}
var arr1 = map(arr,func)
return Object.fromEntries(arr1)
}
function map(arr,func){
    var i  
    var res = []
    for(i=0;i<arr.length;i++){
        res.push([func(arr[i][0],i,arr),arr[i][1]]) 
    }
    return res
}   

function reduceKeys(obj,func,acc){
    var arr = []
    for(const [key,value] of Object.entries(obj)){
        arr.push([key,value])
    }
    return reduce(arr,func,acc)
}
function reduce(arr, func, acc) {
    var init=arr[0][0]
    if (acc !== undefined) {
        init = func(acc,arr[0][0])
    }

    for (var i =1; i < arr.length; i++) {
        init = func(init, arr[i][0])
    }
    
    return init
}