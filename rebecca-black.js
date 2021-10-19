function isFriday(date){
    var day = new Date(date)
    if (day.getDay() == 5){
        return true
    }
    return false
}

function isWeekend(date){
    var day = new Date(date)
    if ((day.getDay() == 6)||(day.getDay()==0)){
        return true
    }
    return false
}   

function isLeapYear(d) {
    var date = new Date(d)
    var year = date.getFullYear()
    if (year%4 !== 0) {
        return false
    } else if (year%100 !== 0) {
        return true
    } else if (year%400 !== 0) {
        return false
    } else {
        return true
    }
}

function isLastDayOfMonth(date){
    var day = new Date(date)

    var month = day.getMonth()
    var d = day.getDate()
    d++
    day.setDate(d)
    var month2 = day.getMonth()
    if (month - month2 != 0){
        return true
    }
    return false
}