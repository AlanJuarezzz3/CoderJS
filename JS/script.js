
let notas;
let promedio;
let suma = 0;

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



class Alumno{
    constructor(nombre, materia, nota, ubicacion, id){
        this.nombre = nombre;
        this.materia = materia;
        this.nota = parseInt(nota);
        this.ubicacion = ubicacion;
        this.id = id;
    }
    asignarId(array){
        this.id=array.length;
    }
}

const alumnos = [
    new Alumno("Alan", "Matematica", 10, "Buenos Aires", 01),
    new Alumno("Lucia", "Matematica", 7, "Buenos Aires", 02)
]

let continuar = true;

while(continuar){
    let ingreso = prompt("ingrese datos del alumno:nombre, materia, nota y ubicacion,separado con(/). X para finalizar");
    if (ingreso.toUpperCase()=="X"){
        continuar=false;
        break;
    }
    let datos = ingreso.split("/");
    const alumno = new Alumno (datos [0],datos[1], datos[2], datos[3]);

    alumnos.push(alumno);
    alumno.asignarId(alumnos);
}