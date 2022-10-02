
const txtAreaParrafo = document.getElementById('texto');
const btnEncriptar = document.getElementById('buttonEnc');
const btnDesencriptar = document.getElementById('buttonDes');
const btnCopy = document.getElementById("buttonCopy");
const showText = document.getElementById("text-modificado");
    function encriptarTexto(Texto){
    let textoEncriptado= "";
    for(let i = 0; i < Texto.length; i++){
        switch (Texto.charAt(i)){
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += Texto.charAt(i)
                break;
        }
    }
    return textoEncriptado;
}

function remplazar(texto,letra,parrafo){
    return parrafo.replaceAll(texto,letra);
}

function cambiar(){
    const mostrarInfo = document.getElementById("span-content-show");
    const mostrarText = document.getElementById("text-Modificado-content");
    mostrarInfo.style.display = "none";
    mostrarText.style.display = "flex";

}


function desencriptarTexto(Texto){
    let desencriptado = "";
    desencriptado = remplazar("enter","e",Texto);
    desencriptado = remplazar("imes","i",desencriptado);
    desencriptado = remplazar("ai","a",desencriptado);
    desencriptado = remplazar("ober","o",desencriptado);
    desencriptado = remplazar("ufat","u",desencriptado);
    return desencriptado;
}

function copyToClipboard() {
    navigator.clipboard.writeText(encriptarTexto(txtAreaParrafo.value)).then(() => {
        alert("Texto Copiado!!!");
    });
}

function comprobarFrase(textParrafo){
        let mayus = true;
        for(let i = 0; i < textParrafo.length; i++){
            if(textParrafo.charAt(i) == " "){
                continue;
            }else {
                if(textParrafo.charAt(i) == textParrafo.charAt().toUpperCase()){
                    mayus = false;
                }
                if(textParrafo.charCodeAt(i) < 97 || textParrafo.charCodeAt(i) > 122){
                    mayus = false;
                }
            }

        if(mayus === false){
            alert("Solo letras minúsculas y sin acentos")
            return false;
        }else{
            return true;
        }
    }
}

btnEncriptar.addEventListener("click", () => {

    if(comprobarFrase(txtAreaParrafo.value ) == true){
        showText.textContent = encriptarTexto(txtAreaParrafo.value);
        cambiar();
    }
});

btnDesencriptar.addEventListener("click", ()=>{
   console.log("Desencriptando");
    showText.textContent = desencriptarTexto(txtAreaParrafo.value);
    if(comprobarFrase(txtAreaParrafo.value ) == true){
        cambiar();
    }

});

btnCopy.addEventListener("click", () =>{
    document.execCommand("copy",false,)
    copyToClipboard();
});
