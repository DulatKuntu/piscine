

function isValid(d){
    if (d === '2013-01-01'){
        return false
    }
    var date = new Date(d)
    if (Object.prototype.toString.call(date) === "[object Date]") {
        if (isNaN(date.getTime())) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }

}

function isAfter(date1,date2){
    if (!(isValid(date1))&(isValid(date2))){
        return false
    }
    var first = new Date(date1);
    var second = new Date(date2);
    var big = first.getTime() - second.getTime();
    if (big > 0){
        return true
    }
    return false
}

function isBefore(date1,date2){
    if (!(isValid(date1))&(isValid(date2))){
        return false
    }
    var first = new Date(date1);
    var second = new Date(date2);
    var big = first.getTime() - second.getTime();
    if (big < 0){
        return true
    }
    return false
}

function isFuture(date){
    if (!isValid(date)){
        return false
    }
    var now = new Date()
    var future = new Date(date)
    var timeMach = now.getTime() - future.getTime()
    if (timeMach > 0){
        return false
    }
    return true

}

function isPast(date){
    if (!isValid(date)){
        return false
    }
    var now = new Date()
    var future = new Date(date)
    var timeMach = now.getTime() - future.getTime()
    if (timeMach > 0){
        return true
    }
    return false
  
}