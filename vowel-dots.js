var vowels = /([a,e,i,u,o,A,E,I,U,O])/g

function vowelDots(str){
    return str.replace(vowels,"$1.")
}