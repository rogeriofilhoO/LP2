function mFuncao() {
    var x= document.getElementById("paragrafo");
    x.innerHTML = "Hello!";
}

function trocaImagem() {
    var elemento = document.getElementById("myimage");
    if(elemento.src.match("bulbon")) {
        elemento.src = "pic_bulboff.png";
    } else {
        elemento.src = "pic_bulbon.png";
    }
}