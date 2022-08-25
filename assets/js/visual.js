//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

   
//Funciones visuales
function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
        document.getElementById("entrar").addEventListener("click", aceptado);
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
        //funcionalidad
        document.getElementById("registrar").addEventListener("click", guardado);
        document.getElementById("resetear").addEventListener("click", reset);
}

        function guardado(event){
            console.log("elementos guardados");
            console.log(
                document.querySelector("#nombre").value,
                document.querySelector("#correo").value,
                document.querySelector("#usuario").value,
                document.querySelector("#contraseña").value,
            );//cargar datos
            let misRegistros ={
                nombre : document.querySelector("#nombre").value,
                correo : document.querySelector("#correo").value,
                usuario : document.querySelector("#usuario").value,
                contraseña : document.querySelector("#contraseña").value
            };
            console.log(misRegistros);
            console.log(JSON.stringify(misRegistros));
            save_localStorage(misRegistros);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registro Guardado',
                showConfirmButton: false,
                timer: 1200
              });
            event.preventDefault();
        }
let save_localStorage = function(misRegistros){
    localStorage.setItem("miInfo",JSON.stringify(misRegistros));
}

let read_localStorage = function(){
    let miInfo = localStorage.getItem("miInfo");
    console.log(miInfo);
    let misRegistros = JSON.parse(miInfo);
    console.log(misRegistros);
    document.querySelector("#nombre").value = misRegistros.nombre;
    document.querySelector("#correo").value = misRegistros.correo;
    document.querySelector("#usuario").value = misRegistros.usuario;
    document.querySelector("#contraseña").value = misRegistros.contraseña;
}

let reset = function (event){
    document.querySelector("#nombre").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#usuario").value = "";
    document.querySelector("#contraseña").value = "";
    localStorage.clear();
    event.preventDefault();
}

//verificando usuario para logueo
let aceptado = function(event){
    const correos = document.getElementById(".inicio").value;
    const contra = document.getElementById(".clave").value;
    console.log(correos, contra);

    let obtenerDatos2 = obtenerDatos();
    console.log(obtenerDatos2);

    

    //creando usuario manual por json
    if(correos=="admin" && contra=="admin"){
            window.location.href ='notas.html';
    }else if(correos==obtenerDatos2.correo && contra==obtenerDatos2.clave){
            window.location.href ='notas.html';
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Usuario o Contraseña incorrecto',
          })
    }
    event.preventDefault();
}
async function obtenerDatos(){
    const response = await fetch("loguin.json");
    const json = await response.json();
    return json
}
obtenerDatos();
