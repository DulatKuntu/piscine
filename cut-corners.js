function round(num) {
    if (num > 0) {
        if (num%1 > 0.5) {
            return num - (num%1) +1
        } else {
            return num - (num%1)
        }
    } else {
        if (num%1 < -0.5) {
            return num - (num%1) - 1
        } else {
            return num - (num%1)
        }
    }
}

function ceil(num) {
    if (num%1 == 0) {
        return num
    }
    if (num > 0) {
        return num-(num%1) + 1
    } else {
        return num-(num%1)
    }
}

function floor(num) {
    if (num%1 == 0) {
        return num
    }
    if (num > 0) {
        return num - (num%1)
    } else {
        return num - (num%1) -1
    }

}

function trunc(num) {
    return num-(num%1)
}

