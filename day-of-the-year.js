function dayOfTheYear(dat){
    var date = new Date(dat)
    var year = date.getFullYear()

    if (year < 10){
        year = "000" + year
    }else if( year < 100){
        year = "00" + year
    }else if(year < 1000){
        year = "0" + year
    }
    var zer = new Date(year + '-01-01')
    var time1 = date.getTime()
    var time0 = zer.getTime()
    return (time1-time0)/(1000*60*60*24) + 1
}