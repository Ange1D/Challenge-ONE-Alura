const mensajeEntrada = document.getElementById('message-input');
const mensajeSalida = document.getElementById('message-output');

const caracteresValidos = new RegExp('[a-zñ ]','g');
const caracteresNoValidos = new RegExp('[^a-zñ ]','g');

mensajeEntrada.addEventListener('input', () => {
    mensajeEntrada.value = mensajeEntrada.value.replace(caracteresNoValidos, '');
});

function btnCifrar(){
    validarMensaje() ? cifrar() : alert("Ingrese un mensaje valido");
}

function cifrar() {
    let mensaje = mensajeEntrada.value;

    let mensajeCifrado = "";

    for (let letra of mensaje) {

      switch (letra) {
        case "e":
            mensajeCifrado += "enter";
            break;
        case "i":
            mensajeCifrado += "imes";
            break;
        case "a":
            mensajeCifrado += "ai";
            break;
        case "o":
            mensajeCifrado += "ober";
            break;
        case "u":
            mensajeCifrado += "ufat";
            break;
        default:
            mensajeCifrado += letra;
            break;
         
      }
      
    }

    mensajeSalida.value = mensajeCifrado;

}

function btnDescifrar(){
    validarMensaje() ? descifrar() : alert("Ingrese un mensaje valido");
}

function descifrar() {
    let mensajeDescifrado = mensajeEntrada.value;
    mensajeDescifrado = mensajeDescifrado.replace(/enter/g, "e");
    mensajeDescifrado = mensajeDescifrado.replace(/imes/g, "i");
    mensajeDescifrado = mensajeDescifrado.replace(/ai/g, "a");
    mensajeDescifrado = mensajeDescifrado.replace(/ober/g, "o");
    mensajeDescifrado = mensajeDescifrado.replace(/ufat/g, "u");

    mensajeSalida.value = mensajeDescifrado;
}

function btnCopiar(){

let mensajeCifrado = mensajeSalida.value;

if (!navigator.clipboard){
        alert("No es posible copiar el mensaje cifrado \nActualiza tu navegador");
    } else{
        navigator.clipboard.writeText(mensajeCifrado).then(
        function(){
            //alert("Mensaje cifrado copiado");
            mensajeEntrada.value = mensajeCifrado;
            mensajeSalida.value = "";
        })
        .catch(
        function() {
            alert("Ocurrio un error \nNo fue posible copiar el mensaje cifrado");
        });
    }   
}

function validarMensaje(){
    let mensaje = mensajeEntrada.value;
    return (mensaje != "" && mensaje.length > 0 && caracteresValidos.test(mensaje));  
}