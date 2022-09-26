

let div=null;


window.onload = () => {
    main();
}
function main() {
    //generate color function
    var bgcolor = '';
    const root = document.getElementById("root");
    const change_btn = document.getElementById("change_btn");
    const output=document.getElementById("output");
    const copybtn=document.getElementById("copybtn");
    copybtn.addEventListener('click',function(){
        if(div!==null){
            div.remove();
            div=null;
        }
        navigator.clipboard.writeText(output.value);
         if(isValidHex(output.value)){
            generateToastMessage(`${output.value} copied`);
         }else{
            alert('not valid hex code');
         }
    });
    change_btn.addEventListener('click', function () {
        bgcolor = rgbColor();
        output.value=bgcolor;
        root.style.backgroundColor = bgcolor;
    });
    output.addEventListener('keyup',function(e){
        const color=e.target.value;
        if(color && isValidHex(color)){
         root.style.backgroundColor=color;
        }
    })
}
function generateToastMessage(msg){
  div = document.createElement('div');
  div.innerText=msg;
  div.className=('toast-message toast-message-slide-in');
  document.body.appendChild(div);
  div.addEventListener('click', function(){
    div.classList.remove('toast-message-slide-in');
    div.classList.add('toast-message-slide-out');
     div.addEventListener('animationend',function(){
        div.remove();
        div=null;
     })
  })
}
function isValidHex(color){
    if(color.length!==7) return false;
    if(color[0]!=='#') return false;
    color=color.substring(1);
    return /^[0-9A-Fa-f]{6}$/.test(color);
}
function rgbColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}1
