const debounce = (func, wait) => {
    let timeout;
  
    return function () {
      const later = () => {
        timeout = null;
        func();
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  document.getElementById("text").addEventListener('keydown', debounce(check,1000))

function check(){
    const inp = document.getElementById("text").value
    if(inp==""){
        console.log(inp)
    }else{
        console.log(inp)
    }
    return
}