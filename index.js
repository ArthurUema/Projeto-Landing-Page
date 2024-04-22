var SetaEsquerda = window.document.getElementById("setaesquerda")
var SetaDireita = window.document.getElementById("setadireita")
var Carlos = window.document.getElementById("carlos")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna") 

function RolarParaDireita(){
    Carlos.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style ="display:flex; margin-top: 55px"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    Carlos.style = "display:flex"
    Bruna.style = "display:none"
    SetaEsquerda.style ="display:none"
    SetaDireita.style = "display:flex; margin-top:55px"
}

