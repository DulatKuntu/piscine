function matchCron(cron, d) {
    var date = new Date(d)

    for (var i = 0; i < cron.length; i++) {
        if (cron[i] !== '*' && cron[i] !== ' ') {
            switch (i) {
                case 0:
                    if (Number(cron[i]) !== date.getMinutes()) {
                        return false
                    }
                    continue
                case 2:
                    if (Number(cron[i]) !== date.getHours()) {
                        return false
                    }
                    continue
                case 4:
                    if (Number(cron[i]) !== date.getDate()) {
                        return false
                    }
                    continue
                case 6:
                    if (Number(cron[i]) !== (date.getMonth()+1)) {
                        return false
                    }
                    continue
                case 8:
                    if (Number(cron[i]) !== date.getDay()) {
                        return false
                    }
                    continue
            }
        }
    }
    return true
}