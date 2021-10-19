function map(arr,func){
    var i  
    var res = []
    for(i=0;i<arr.length;i++){
        res.push(func(arr[i],i,arr)) 
    }
    return res
}
function flatMap(arr,func){
    return Array.prototype.concat.apply([], map(arr,func)); 
}
