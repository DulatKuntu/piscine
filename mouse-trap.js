document.addEventListener('click', event => createCircle(event))
var divs = []
var trus = []
export function createCircle(){
    var x = event.clientX
    var y = event.clientY
    var box = divs[0].getBoundingClientRect()
    var body = document.querySelector("body")
    var div = document.createElement("div")
    console.log(div)
    div.className = 'circle'
    div.style.top = y - 25 + 'px'
    div.style.left = x - 25 + 'px'
    if(inBox(box,x,y)){
        trus[divs.length] = true
    }
    if(trus[divs.length]){
        div.style.background = 'var(--purple)' 
        if(x>box['x']+box['width']-25){
            div.style.left=box['x'] +box['width'] -50 -1 + 'px'   
        }
        if(x-25<box['x']){
            div.style.left=box['x']  + 1 +'px'   
        }
        if(y>box['y']+box['height']-25){
            div.style.top=box['y']+box['height']-50 -1+ 'px'   
        }
        if(y<box['y']+25){
            div.style.top=box['y'] + +1+'px'   
        }
    }else{
        div.style.background = 'white'
    }
    body.appendChild(div)
    divs.push(div)
}
document.addEventListener('mousemove', event=>moveCircle(event))

export function moveCircle(event){
    var body = document.querySelector("body")
    var x = event.clientX
    var y = event.clientY
    var box = divs[0].getBoundingClientRect()
    
    if(divs.length>1){
        
        
        body.removeChild(divs[divs.length-1])
        divs.pop()
        createCircle(event)
    }
    
}
export function inBox(box,x,y){
    if(x>box['x']+25&x<box['x']+box['width']-25&y<box['y']+box['height']-25&y>box['y']+25){
        return true
    }
}
export function setBox(){ 
    var body = document.querySelector('body')
    var div=document.createElement('div')
    div.className = 'box'
    body.appendChild(div)
    divs.push(div)
}