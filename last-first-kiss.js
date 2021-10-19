function first(arr){
    return arr[0]
}
function last(arr){
    let leng = arr.length - 1
    return arr[leng]
}
function kiss(arr){
    let arr1 = []
    arr1[1]=arr[0]
    let l = arr.length - 1
    arr1[0]=arr[l]
    return arr1
}