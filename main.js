function btnCifrar(){
    var mensaje = document.getElementById('message-input').value;
    if(mensaje == "" || mensaje.length == 0){
        alert("Ingrese un mensaje");
    }else{
        cifrar(mensaje); 
    }
    
}

function cifrar(mensaje) {

    var mensajeCifrado = "";

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

    document.getElementById('message-output').value = mensajeCifrado;

  }

function btnDescifrar(){
    var mensaje = document.getElementById('message-input').value;
    if(mensaje == "" || mensaje.length == 0){
        alert("Ingrese un mensaje");
    }else{
        descifrar(mensaje); 
    }
    
}

function descifrar(mensaje) {
    let mensajeDescifrado = mensaje.toLowerCase();
    mensajeDescifrado = mensajeDescifrado.replace(/enter/g, "e");
    mensajeDescifrado = mensajeDescifrado.replace(/imes/g, "i");
    mensajeDescifrado = mensajeDescifrado.replace(/ai/g, "a");
    mensajeDescifrado = mensajeDescifrado.replace(/ober/g, "o");
    mensajeDescifrado = mensajeDescifrado.replace(/ufat/g, "u");

    document.getElementById('message-output').value = mensajeDescifrado;
}

function btnCopiar(){


var mensajeCifrado = document.getElementById("message-output").value;

if (!navigator.clipboard){
    alert("No es posible copiar el mensaje cifrado \nActualiza tu navegador");
} else{
    navigator.clipboard.writeText(mensajeCifrado).then(
        function(){
            //alert("Mensaje cifrado copiado");
            document.getElementById('message-input').value = mensajeCifrado;
            document.getElementById('message-output').value = "";
        })
      .catch(
         function() {
            alert("Ocurrio un error \nNo fue posible copiar el mensaje cifrado");
      });
}   
}