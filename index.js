//Header responsive
jQuery('document').ready(function($) {

    var menuBoton = $(".menu-icon");
    var menu = $("header ul");

    function mostrarMenu() {

        if (menu.hasClass("show")) {

            menu.removeClass("show");
        }
        else {

            menu.addClass("show");            
        }
    }

    menuBoton.click(mostrarMenu);
});

//Logica de encriptacion/desencriptacion

document.getElementById("encriptador-out-div1").style.display = "block"
document.getElementById("encriptador-out-div2").style.display = "none"


function encriptar() {

    let resultado = document.getElementById("mensaje-encriptado");
    let texto = document.getElementById("encriptador-in").value;
    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    //Fin del replace

    if(texto != "") {

        resultado.value = textoEncriptado;
        document.getElementById("encriptador-out-div1").style.display = "none";
        document.getElementById("encriptador-out-div2").style.display = "block";
    }
    else {

        document.getElementById("encriptador-out-div1").style.display = "block"
        document.getElementById("encriptador-out-div2").style.display = "none"
    }
}

function desencriptar() {

    let resultado = document.getElementById("mensaje-encriptado");
    let texto = document.getElementById("encriptador-in").value;

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    //Fin del replace
    
    if(texto != "") {

        resultado.value = textoDesencriptado;
        document.getElementById("encriptador-out-div1").style.display = "none";
        document.getElementById("encriptador-out-div2").style.display = "block";
    }
    else {

        document.getElementById("encriptador-out-div1").style.display = "block"
        document.getElementById("encriptador-out-div2").style.display = "none"
    }
}

function copiarTexto() {

    let textoCopiado = document.getElementById("mensaje-encriptado");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);

    textoCopiado.value = "";
}

var botonEn = document.getElementById("boton-en");
botonEn.addEventListener("click",encriptar);

var botonDes = document.getElementById("boton-des");
botonDes.addEventListener("click",desencriptar);

var botonCop = document.getElementById("boton-cop");
botonCop.addEventListener("click",copiarTexto);