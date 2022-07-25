let notas;
let promedio;
let suma = 0;

const saludar = () =>{
    console.log("hola soy una funcion");
}

let nombres = prompt("ingrese su nombre");
let apellidos = prompt("ingrese su apellido");
alert(nombres + " " + apellidos);

let asignatura = prompt("indique asignatura");
alert(asignatura);

let nnotas = parseInt(prompt("indique cantidad de notas a promediar"));

for (i = 0; i < nnotas; i++) {
    let notas = parseInt(prompt("ingrese nota " + i));
    suma = suma + notas;
}

promedio = suma / nnotas;
alert("Su promedio en " + asignatura + " es " + promedio);

if (promedio >= 7) {
    alert("promociona");
} else if (promedio >= 4) {
    alert("aprobado");
}
else {
    alert("recursa");
}



