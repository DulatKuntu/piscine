export function build(num) {
    var obj = {
        i: 1,
    }


    var t = setInterval(function () {

        var body = document.querySelector('body')
        var div = document.createElement('div')
        div.id = 'brick-'+ obj.i
        if (obj.i%3 === 2) {
            div.dataset.foundation = 'true'
        }
        body.appendChild(div)
        obj.i++
        if (obj.i > num) {
            clearInterval(t)
            return 
        }
    }, 100)
}




export function repair() {
    for (var i = 0; i < arguments.length; i ++) {
        var brick = document.getElementById(arguments[i])
        if (brick === null) {
            return 
        }
        if (brick.dataset.foundation === null) {
            brick.dataset.repaired = 'true'
        } else {
            brick.dataset.repaired = 'in progress'
        }
    }
}
export function destroy(){
    var i = 1;
    var prev = 0
    while (true) {
        let brick = document.getElementById('brick-'+i)
        if (brick === null) {
            prev = i-1
            break
        }
        i++
    }
    var body = document.querySelector('body')
    if (prev === 0) {
        return
    }
    body.removeChild(document.getElementById('brick-'+prev))
}