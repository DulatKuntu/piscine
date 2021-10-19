document.addEventListener("keydown",(event)=>compose(event))
var divs = [];
    export function compose(event){
        var body = document.querySelector("body")
        var div = document.createElement("div")
        var char = event.key
        if(char>='a'&char<='z'){
            div.innerHTML = char
            div.classList.add('note')
            divs.push(div)
            div.style.background = 'rgb('+Math.floor((Math.random()*event.keyCode)/event.keyCode*256)+','+Math.floor((Math.random()*event.keyCode)/event.keyCode*256)+','+Math.floor((Math.random()*event.keyCode)/event.keyCode*256)+')'
            body.appendChild(div)
        }else if(char == 'Escape'){
            while (divs.length != 0){
                body.removeChild(divs.pop())
            }
        }else if(char == 'Backspace'){
            body.removeChild(divs.pop())
        }
        

    }
