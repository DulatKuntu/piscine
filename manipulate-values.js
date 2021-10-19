function filterValues(obj,func){
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
       if (func(arr[i][1], i, arr)) {
           ret.push([arr[i][0],arr[i][1]])
       } 
    }
    return ret
}

function mapValues(obj,func){
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
        res.push([arr[i][0],func(arr[i][1],i,arr)]) 
    }
    return res
}   

function reduceValues(obj,func,acc){
    var arr = []
    for(const [key,value] of Object.entries(obj)){
        arr.push([key,value])
    }
    return reduce(arr,func,acc)
}
function reduce(arr, func, acc) {
    var init = arr[0][1];
    

    for (var i =1; i < arr.length; i++) {
        init = func(init, arr[i][1])
    }
    if (acc !== undefined) {
        init = init + acc
    }
    return init
}