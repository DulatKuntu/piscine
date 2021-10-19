const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ]
var count=0;
var cond = {
    prog:true,
}
export function pimp(){
    var button = document.querySelector("button")
    var i =0;
    if(cond["prog"]){
        if(count==14){
            button.classList.add(styles[count])
            button.classList.add("unpimp")
            cond["prog"]=false;
        }else{
            button.classList.add(styles[count])
            count++
        }
    }else{
        if(count==0){
            button.classList.remove("unpimp")
            button.classList.remove(styles[count])
            cond["prog"]=true
        }else{
            button.classList.remove(styles[count])
            count--
        }
        

    }
}   