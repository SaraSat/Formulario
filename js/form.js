
//Eventos para cambiar formulario
document.getElementById("sign").addEventListener("click",  function () {
  eventButtom("signup","login");
  cambioButtom("sign","log");
  
});
document.getElementById("log").addEventListener("click", function () {
  eventButtom("login","signup");
  cambioButtom("log","sign");
});

//función que despliega el formulrio indicado mientras ocula el otro
function eventButtom(element1, element2){
  document.getElementById(element1).style.display="block";
  document.getElementById(element2).style.display="none";
  
}
//función que cambia la apariencia del botón de logueo o registro para indicar al usuario dónde se encuentra
 function cambioButtom(element1, element2){
  document.getElementById(element1).style.backgroundColor= "rgb(79, 117, 79)";
  document.getElementById(element2).style.background=0;

 }


//Variables:
//Registro
var nom=document.getElementById("name");
var name2=document.getElementById("2name");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var pass2=document.getElementById("pass2");
//Login
var user=document.getElementById("user");
var userPass=document.getElementById("userPass");

//Checkbox contraseña visible

var checkbox=document.getElementById("ver");

//Funcion para hacer visible la contraseña, evento creado en el HTML
function passVisible(checkbox){
  
    if(checkbox.checked==true){
      pass.type="text";
      pass2.type="text";

    }else{
      pass.type="password";
      pass2.type="password";

    }
}


  document.getElementById("start").addEventListener("click",validar, false);


function validar(){
  if(
  validarName(nom) &&
  validarName(name2) &&
  validarEmail(email) &&
  validarPass(pass, pass2)){
    eventButtom("bienvenida","form");
  }
  else{
    return false;
  }
  
}


function validarName(nombre){
    if(nombre.validity.valueMissing){
      validarEmpty(nombre);
      return false;
    }
    if(nombre.validity.patternMismatch){
      validarMatch(nombre, "Solo acepta letras");
      return false;
    }
    
  else{
     return true;
  }
 
}
function validarEmail(email){
    if(email.validity.valueMissing){
      validarEmpty(email);
      return false;
    }
    if(email.validity.patternMismatch){
      validarMatch(email, "Debe introducir un número de teléfono o un correo elestrónico");
      return false;
    }
   
  else{
    return true;
  }
  
}

function validarPass(pass, pass2){
    if(pass.validity.valueMissing){
      validarEmpty(pass);
      return false;
    }
    if(pass.validity.patternMismatch){
      validarMatch(pass, "Debe contener al menos una minúscala, al menos una mayúscula y un caracter no alfanumérico. Almenos 8 caracteres");
      return false;
    }
   if(pass.value!=pass2.value){
      validarMatch(pass2, "Las contraseñas no coinciden");

    }
    
  else{
    return true;
  }
  
}



function validarEmpty(id){
    id.setCustomValidity("Rellene los campos obligatorios");
}
function validarMatch(id,mensaje){
  
  id.setCustomValidity(mensaje);
  
  }
 

