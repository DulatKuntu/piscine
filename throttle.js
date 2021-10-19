function throttle(func, ms) {
    let isThrottled = false
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }

        func.apply(this, arguments)

        isThrottled = true

        setTimeout(function() {
            isThrottled = false
            if (savedArgs) {
                func.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }

        }, ms)
    }

    return wrapper
}



function opThrottle(func, ms, options ) {
    let isThrottled = false
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }
        if (options.leading !== false) {
            func.apply(this, arguments)
            isThrottled = true
        } else {
            savedArgs = arguments
            savedThis = this
        }


        setTimeout(function() {
            isThrottled = false
            if (options.trailing !== false && savedArgs) {
                func.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }

        }, ms)
    }

    return wrapper
}