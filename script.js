let buttonEncrypt = document.querySelector(".buttonEncrypt");
let buttonDecrypt = document.querySelector(".buttonDecrypt");
let textEncrypt = document.querySelector(".textEncrypt");
let result = document.querySelector(".result");

buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;


function encrypt(){
    ocultar();
    let textBox = getText();
    result.textContent = encryptText (textBox);
}

function decrypt(){
    ocultar();
    let textBox = getText();
    result.textContent = decryptText (textBox);
}

function getText (){
    let textBox = document.querySelector(".textBox");
    return textBox.value;
}

function ocultar (){
    textEncrypt.classList.add("ocultar");
}

//recorre el texto

function encryptText (msg) {
    let text = msg;
    let finalText = "";

    for (let i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai";
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter";
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes";
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober";
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat";
        }
        else {
            finalText = finalText + text [i];
        }
    }
    return finalText;

}

//desencripta el texto

function decryptText (msg) {
    let text = msg;
    let finalText = "";

    for (let i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
        }
        else if(text[i] == "u"){
            finalText = finalText + "u"
        }
        else {
            finalText = finalText + text [i];
        }
    }
    return finalText;

}

//copia el texto encriptado o desencriptado

const buttonCopy = document.querySelector(".buttonCopy");
buttonCopy.addEventListener("click", copy = () => {
let result = document.querySelector(".result").textContent;
navigator.clipboard.writeText(result);
})
