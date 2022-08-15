
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
    navigator.clipboard.writeText(txtAreaParrafo.value).then(() => {
        alert("Texto Copiado!!!");
    });
}


btnEncriptar.addEventListener("click", () => {
    console.log("Encriptando");
    showText.textContent = encriptarTexto(txtAreaParrafo.value);
    console.log();

    cambiar();
});

btnDesencriptar.addEventListener("click", ()=>{
   console.log("Desencriptando");
    showText.textContent = desencriptarTexto(txtAreaParrafo.value);
    cambiar();
});

btnCopy.addEventListener("click", () =>{
    document.execCommand("copy",false,)
    copyToClipboard();
});
