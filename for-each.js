function forEach(arr,func){
    var i
    for (i=0;i<arr.length;i++){
        func(arr[i],i,arr)
    }
}