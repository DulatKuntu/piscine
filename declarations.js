var escapeStr = "\`\\\/\"\'"
let arr = [4,'2']
const obj = {
    str : "string",
    num : 7,
    bool : true,
    undef : undefined
}
const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str : "string",
        num : 7,
        bool : true,
    }

}
Object.freeze(obj)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
Object.freeze(nested)
