export function getArchitects() {
    return [Array.from(document.getElementsByTagName('a')), Array.from(document.getElementsByTagName('span'))] 
}



export function getClassical() {
    return [Array.from(document.querySelectorAll('a.classical')), Array.from(document.querySelectorAll('a:not(.classical)'))]
}

export function getActive() {
    return [Array.from(document.querySelectorAll('a.classical.active')), Array.from(document.querySelectorAll('a.classical:not(.active)'))]
}

export function getBonannoPisano() {
    return [document.getElementById('BonannoPisano'), Array.from(document.querySelectorAll('a.classical.active:not(BonannoPisano)'))]
}