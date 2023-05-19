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