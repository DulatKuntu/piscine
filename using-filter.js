function filterShortStateName(arr){
    return arr.filter(x=> x.length < 7)
}

function filterStartVowel(arr){
    return arr.filter(x => vowel(x))
}
function vowel(x){
    return (String(x[0].toLowerCase()) == 'a') || (String(x[0].toLowerCase()) == 'o') || (String(x[0].toLowerCase()) == 'i') || (String(x[0].toLowerCase()) == 'e') || (String(x[0].toLowerCase()) == 'u')

}
function atLeast(str){
    var i 
    for (i=0;i<str.length;i++){
        if (vowel(str[i])){
            return true
        }
    }
    return false
}
function filter5Vowels(arr){
    return arr.filter(x=> {
        var i 
        var count = 0
        for (i=0;i<x.length;i++){
            if(vowel(x[i])){
                count++
            }
        }
        if (count > 4){
            return true
        }
        return false
    })
}

function filter1DistinctVowel(arr){
    return arr.filter(x=>{
        var i 
        var prev = ""
        var count = 0
        for (i=0;i<x.length;i++){            
            if(vowel(x[i])){
                if (count == 0){
                    prev = x[i].toLowerCase()
                }
                count++
                if (prev!=x[i].toLowerCase()){
                    return false
            }
        }
        
    }
    return true
    })

}
function multiFilter(arr){
    return arr.filter(x=>{
        return (x['capital'].length > 7)&&(!vowel(x['name']))&&(atLeast(x['tag'])) && (x['region']!='South')
    })
}