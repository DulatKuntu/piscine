function fusion(o1, o2) {
    if (Array.isArray(o1) && Array.isArray(o2)) {
        return o1.concat(o2)
    } else if (typeof o1 === 'string' && typeof o2 === 'string') {
        return o1 + ' ' + o2
    } else if (typeof o1 === 'number' && typeof o2 === 'number') {
        return o1 + o2
    } else if (typeof o1 === 'object' && typeof o2 === 'object'){
        var o3 = {}
        for (var key in o2) {
            o3[key] = o2[key]
        }

        for (var key in o1) {
            if (o3.hasOwnProperty(key)) {
                o3[key] = fusion(o1[key], o3[key])
            } else {
                o3[key] = o1[key]
            }
        }
        if (Object.keys(o3).length === 0 && o3.constructor === Object) {
            return o2
        }

        return o3
    } else {
        return o2
    }
}