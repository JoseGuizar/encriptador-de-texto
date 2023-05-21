function beginPage() {

    document.getElementById("container-a").style.display = "none";
    document.getElementById("container-b").style.display = "flex";
}

function encriptar() {

    let resultado = document.getElementById("encriptador-out");
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
        document.getElementById("precontainer-2").style.display = "none";
        document.getElementById("postcontainer-2").style.display = "block";
    }
    else {

        document.getElementById("precontainer-2").style.display = "block";
        document.getElementById("postcontainer-2").style.display = "none";
    }
}

function desencriptar() {

    let resultado = document.getElementById("encriptador-out");
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
        document.getElementById("precontainer-2").style.display = "none";
        document.getElementById("postcontainer-2").style.display = "block";
    }
    else {

        document.getElementById("precontainer-2").style.display = "block";
        document.getElementById("postcontainer-2").style.display = "none";
    }
}

function copiar() {

    let copyText = document.getElementById("encriptador-out");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    copyText.value = "";
}

function clean() {

    let textContent = document.getElementById("encriptador-in");
    textContent.value = "";

    document.getElementById("precontainer-2").style.display = "block";
    document.getElementById("postcontainer-2").style.display = "none";
}

document.getElementById("container-a").style.display = "block";
document.getElementById("container-b").style.display = "none";

const botonOn = document.getElementById("boton-on");
botonOn.addEventListener("click", beginPage);

const botonEn = document.getElementById("boton-en");
botonEn.addEventListener("click", encriptar);

const botonDes = document.getElementById("boton-des");
botonDes.addEventListener("click", desencriptar);

const botonCop = document.getElementById("boton-cop");
botonCop.addEventListener("click", copiar);

const botonLim = document.getElementById("boton-lim");
botonLim.addEventListener("click", clean);
