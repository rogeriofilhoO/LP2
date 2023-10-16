function trocarEmoji(e){
    var obj = document.getElementById("emoji");
    if(e==1) {
        obj.setAttribute("class", "e1");
    } else if(e==2) {
        obj.setAttribute("class", "e2");
    } else if(e==3) {
        obj.setAttribute("class", "e3");
    }

}

function removerEmoji(){
    var obj = document.getElementById("emoji");
    obj.removeAttribute("class");
}

function verificarEmoji() {
    var obj = document.getElementById("emoji");
    if(obj.hasAttribute("class")) {
        alert("Atributo class está na tag");
    } else {
        alert("Não tem o Atributo na Tag")
    }
}