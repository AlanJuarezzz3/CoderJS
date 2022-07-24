var notas;
var promedio;
var suma = 0;

var nombres = prompt("ingrese su nombre");
var apellidos = prompt("ingrese su apellido");
alert(nombres + " " + apellidos);

var asignatura = prompt("indique asignatura");
alert(asignatura);

var nnotas = parseInt(prompt("indique cantidad de notas a promediar"));

for (i = 0; i < nnotas; i++) {
    var notas = parseInt(prompt("digita la nota " + i));
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

