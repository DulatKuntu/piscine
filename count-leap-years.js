function countLeapYears(date){
    var day = new Date(date)
    var year = day.getFullYear()
    var i
    var count = 0
    for (i=1;i<year;i++){
        if (i%4 !== 0) {
            continue
        } else if (i%100 !== 0) {
            count++
        } else if (i%400 !== 0) {
            continue
        } else {
            count++
        }
    }
    return count
}