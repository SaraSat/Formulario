
//Eventos para cambiar formulario
//Botón de registro
document.getElementById("sign").addEventListener("click",  function () {
  eventButtom("signup","login");
  cambioButtom("sign","log");
  
});
//Botón de logueo
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

//Evento del botón pulsar para poder validar formulario
//Formulario registro
  document.getElementById("start").addEventListener("click",validarRegistro, false);

  //Formulario logueo
  document.getElementById("acept").addEventListener("click",validarLogin,false);


  //En la vista de bienvenida, al pulsar entrar, podrás acceder al formulario de logueo
  document.getElementById("entrar").addEventListener("click", eventButtom("inicio","bienvenida"));

//Una vez iniciada sesión, se tiene la opción de salir
  document.getElementById("salir").addEventListener("click", salir);

/*Función para validar los distintos inputs del formulario de registro, si todo está correcto, 
se crean las cookies de usuario y contraseña, y, se mostrará una bienvenida */
  function validarRegistro(){
  if(
    validarName(nom) &&
    validarName(name2) &&
    validarEmail(email) &&
    validarPass(pass, pass2)){
      setCookie("usuario",email.value,365);
      setCookie("contraseña",pass.value,365);
      eventButtom("bienvenida","form");
      return true;
  }
  else{
    return false;
  }
}

function validarLogin(){
  var usuario=getCookie("usuario");
  var contraseña=getCookie("contraseña");
  if(user.value==usuario && userPass==contraseña){
    setCookie("User",user,1/24);
    eventButtom("inicio","form-login");
    return true;
  }else if(user.value!=usuario){
    validarMatch(user,"El usuario no es correcto");
    return false;
  }else if(userPass.value!=contraseña){
    validarMatch(userPass,"La contraseña no es correcta");
    return false;
  }
}

// Validación de nombre y apellidos, se comprueba que no esté vacío y que cumple con las resticciones; 
//validarEmpty y Match devuelven un mensaje personalizado de error
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
//Validación del email o numero de teléfono
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
//Validación de las constraseñas
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


//Mensajes personalizados en caso de que las validaciones sean false
function validarEmpty(id){
    id.setCustomValidity("Rellene los campos obligatorios");
}
function validarMatch(id,mensaje){
  
  id.setCustomValidity(mensaje);
  
  }
  //Creación de las cookies 
  function setCookie(nombre, valor, expiracion){
    var date=new Date();
    date.setTime(date.getTime()+ expiracion*24*60*60*1000);
    var expiracion="expires="+date.toUTCString();
    document.cookie=nombre +"="+valor+";"+expiracion+";"; //(nombre, valor, expiracion)
  }
  //Obtención de cookie por su nombre
  function getCookie(nombre){
    var n=nombre;
    var array=documen.cookie.split(";"); //Conversión de la cookie en un array para poder obtener su valor --> nombre=valor;expiracion;
    for(let i=0; i<array.length;i++){
        var c=array[i];
        while (c.charAt(0)=" "){ //si se encuentra un espacio en blanco, se borra
          c=c.subString(1)
        }
        if(c.indexOf(nombre)==0){
          return c.subString(nombre.length,c.length); //Obtencion del valor de la cookie
        }

    }
    return " "; //Si no se encuentra una cookie con el nombre introducido, no devuelve nada
  }
  //Borrar cookies
  function deleteCookie(nombre){
    setCookie(nombre,"",0); //Creación de una cookie sin valor 
  }

  //AL pulsar salir se borrará la cookie del usuario actual y se verá la vista de inicio de sesión
  function salir(){
    deleteCookie("User");
    eventButtom("form","inicio");

  }
 

