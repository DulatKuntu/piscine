function firstDayWeek(week, year){
    while (year.length<4){
        year = "0" + year
    }
    var str = year + '-01-01';
    var date = new Date(str)
    var i = 1
    var day = 1
    
    if ((week == 1)&&(date.getDay()!=1)){
        return '01-01-' + year
    }
    while (i < week){
        if(date.getDay()==0){
            i++
        }
        day = date.getDate()
        day++
        date.setDate(day)
        console.log(date)
    }
    str = ""
    day = date.getDate()
    var month = date.getMonth()
    month++
    if (day < 10){
        str = "0" + day
    }else{
        str = day
    }
    if (month < 10){
        str = str + "-0" + month
    }else{
        str = str + "-" + month
    }
    
    str = str + "-" + year
    return str
}

