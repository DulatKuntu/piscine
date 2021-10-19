function citiesOnly(arr){
    return arr.map(x => x.city)
}
function upperCasingStates(arr){
    return arr.map(x => {
        return String(x).replace(/(\b\w)/g, function replacer(letter){
            return letter.toUpperCase()
        })
    })
}

function fahrenheitToCelsius(arr){
    return arr.map(x=>{
        var array = x.split("°")
        return Math.floor((Number(array[0])-32)/1.8) + '°C'
    })
}

function trimTemp(arr){
    return arr.map(x=>{
         x.temperature = String(x.temperature).replace(/[' ']/g, '')
         return x
    })
}

function tempForecasts(arr){
    return arr.map(x=>{
        var array = [x.temperature]
        var array1 = [x.state]
        return fahrenheitToCelsius(array) + 'elsius in ' + x.city + ", " + upperCasingStates(array1)
    })
}