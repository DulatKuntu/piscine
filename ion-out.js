function ionOut(str) {
    var ion = /\b(\w*?)tion(\w*?)\b/g
    var match;
    var ret = []
    while (match = ion.exec(str)) {
        var r = match[0].replace("ion", "")
        ret.push(r)
    }
    return ret
}