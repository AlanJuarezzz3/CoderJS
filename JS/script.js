let datos = [];

const registrarBoton= document.getElementById("registrarBoton");

registrarBoton.onclick=()=>{
    registrar();
}
function registrar(){
    let nombre = document.getElementById('alumno').value;
    let asignatura = document.getElementById('asignatura').value;
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    
    datos.push({
        'alumno': nombre,
        'asignatura': asignatura,
        'parcial1':p1,
        'parcial2':p2,
        'promedio': (parseInt(p1) + parseInt(p2)) /2,
        'condicion':promedios(p1,p2),
    })

    document.getElementById('formCalif').reset();
    alert('datos guardados');
    crearTabla();
    cerrarModal();
   
    function crearTabla(){
        let fila ='';

        datos.forEach((item, i) => {
            fila += `<tr>
                        <td>${item.asignatura}</td>
                        <td>${item.parcial1}</td>
                        <td>${item.parcial2}</td>
                        <td>${item.promedio}</td>
                        <td>${item.condicion}</td>
                    </tr>`
        })
        document.getElementById('filas').innerHTML = fila;
    }
}
function promedios(p1,p2) {
    if ((parseInt(p1) + parseInt(p2)) /2 >= 7) {
        return"Promociona";
    } else if ((parseInt(p1) + parseInt(p2)) /2 >= 4) {
        return"Final";
    }
    else {
        return"Recursa";
    }
}

const mostrarModal= document.getElementById("mostrarModalbtn");

mostrarModal.onclick=()=>{ 
    document.getElementById('modal-registro').classList.add('active');
}

function cerrarModal(){
    document.getElementById('modal-registro').classList.remove('active');
}