function letterSpaceNumber(str) {
    var lsn = /[a-z][ ][0-9]\b/g
    var ret = []
    let match;
    while (match = lsn.exec(str)) {
        ret.push(match[0])
    }
    return ret
}