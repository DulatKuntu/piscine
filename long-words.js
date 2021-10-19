function longWords(arr){
    const below = (currentVal) => currentVal.length >4
    return arr.every(below)
 }

 function oneLongWord(arr){
     const more = (currentVal) => currentVal.length > 9
     return arr.some(more)
 }

 function noLongWords(arr){
     const cond =(currentVal)=> currentVal.length < 7
     return arr.every(cond)
 }