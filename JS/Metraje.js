document.getElementById("btn_close").addEventListener("click", open_close_menu )


var menuLateral = document.getElementById ("menuLateral");
var btn_close = document.getElementById ("btn_close");
 

function open_close_menu(){
    menuLateral.classList.toggle("menuLateral__cerrado");
}
