function timeTravel(time){
    time.date.setHours(time.hour)
    time.date.setMinutes(time.minute)
    time.date.setSeconds(time.second)
    return time.date
}

function addWeek(date){
   var time = new Date(date)
   var start = new Date('0001-01-01')
    var since = Math.abs(start.getTime() - time.getTime())
    since = (since / (1000*60*60*24)+1)%14
    switch(since) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        case 8:
            return "secondMonday"
        case 9:
            return "secondTuesday"
        case 10:
            return "secondWednesday"
        case 11:
            return "secondThursday"
        case 12:
            return "secondFriday"
        case 13:
            return "secondSaturday"
        case 0:
            return "secondSunday"
    }
    return since
}