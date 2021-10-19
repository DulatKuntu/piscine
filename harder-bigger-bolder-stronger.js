export function generateLetters(){
    var body  = document.querySelector("body");
    var i;
    var fs = 11;
    for (i=0;i<120;i++){
        var div = document.createElement("div")
        var ch = Math.floor(Math.random() * 26)
        div.innerHTML = String.fromCharCode(ch+65) ;
        div.style.fontSize=fs + 'px';
        if(i<40){
            div.style.fontWeight = "300"
        }else if(i<80){
            div.style.fontWeight = "400"
        }else{
            div.style.fontWeight = "600"

        }
        console.log(div)

        body.appendChild(div);
        
        fs++;
    }
}