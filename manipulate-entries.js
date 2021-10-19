function filterEntries(obj,func){
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
       if (func(arr[i], i, arr)) {
           ret.push(arr[i])
       } 
    }
    return ret
}

function mapEntries(obj,func){
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
        res.push(func(arr[i],i,arr)) 
    }

    return res
}   

function reduceEntries(obj,func,acc){
    var arr = []
    for(const [key,value] of Object.entries(obj)){
        arr.push([key,value])
    }
    return reduce(arr,func,acc)
}
function reduce(arr, func, acc) {
    var init=arr[0]
    if (acc !== undefined) {
        init = func(acc,arr[0])
    }

    for (var i =1; i < arr.length; i++) {
        init = func(init, arr[i])
        console.log(init)
    }
    if (typeof init == 'number'){
        return Math.round(init*10)/10 
    }
    return init;
}
function totalCalories(obj){
    var obj1 = Real(obj,'calories')
    return reduceEntries(obj1,(acc,cr)=> {
        if(typeof acc != 'number'){
            return acc[1] + cr[1];
        }
            return acc + cr[1]
    }
    )
}

function Real(obj,smth){
    var arr = []
    for(const [key,value] of Object.entries(obj)){
        arr.push([key,value * nutritionDB[key][smth]/100])
    }
   return Object.fromEntries(arr)
}
function lowCarbs(obj){
    var obj1 = Real(obj,'carbs')
    var o = filterEntries(obj1,([, v]) => v < 50)
    var array = []
    for(const [key,value] of Object.entries(o)){
        array.push([key,obj[key]])
    }
    return Object.fromEntries(array)

}
function realFor([name,num]){
    var obj = {}
    var obj1 = {}
    var arr = []
    var arr1 = []
        if(nutritionDB.hasOwnProperty(name)){
            for(const [key,value] of Object.entries(nutritionDB[name])){
                arr.push([key, Math.round(value * num / 100*1000)/1000])
            }
            obj1 = Object.fromEntries(arr)
        }
            
            return [name,obj1]
    
}
function cartTotal(obj){
   return mapEntries(obj,realFor)
}