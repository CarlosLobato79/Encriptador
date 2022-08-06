
const texto = document.getElementById('texto');
const buttonEncriptar = document.getElementById('buttonEnc');
const buttonDesencriptar = document.getElementById('buttonDes');

function comprobarMayusculas(t){
    for(let i=0; i < t.length; i++){
        if(t.charCodeAt(i) < 97 || t.charCodeAt(i) > 122){
            return false;
        }
    }
    return true;
}


texto.addEventListener("keyup", () => {
    console.log("[Escribiendo]");
    let text =  texto.value;
    let botonesDisable = document.querySelectorAll("button");
    if(!comprobarMayusculas(texto.value)){
        document.getElementById("texto").style.color = "red";
        botonesDisable.disabled = true;
    }else {
        document.getElementById("texto").style.color = "black";
        botonesDisable.disabled = false;
    }
});

buttonEncriptar.onclick = () => {
    console.log("me preciono wa a encriptar uwu");
}

buttonDesencriptar.onclick = () => {
    console.log("me preciono wa a desencriptar Zzz");
}


