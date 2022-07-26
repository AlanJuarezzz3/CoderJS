let datos = [];

const registrarBoton = document.getElementById("registrarBoton");
registrarBoton.onclick = () => {
  registrar();
};

const mostrarModal = document.getElementById("mostrarModalbtn");
mostrarModal.onclick = () => {
  document.getElementById("modal-registro").classList.add("active");
};

function crearTabla() {
  datos = JSON.parse(localStorage.getItem("data")) || [];
  let fila = "";

  datos.forEach((item, i) => {
    fila += `<tr id=${i}>
                        <td>${item.alumno}</td>
                        <td>${item.asignatura}</td>
                        <td>${item.parcial1}</td>
                        <td>${item.parcial2}</td>
                        <td>${item.promedio}</td>
                        <td>${item.condicion}</td>
                        <td class="eliminar">X</td>
                    </tr>`;
  });
  document.getElementById("filas").innerHTML = fila;
  const eliminar = document.querySelectorAll(".eliminar");
  console.log(eliminar);
  
  eliminar.forEach((elem) =>
    elem.addEventListener("click", () => {
      elem.parentElement.remove();
      localStorage.clear();
    })
  );
}

function registrar() {
  let nombre = document.getElementById("nombre").value;
  let asignatura = document.getElementById("asignatura").value;
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;

  datos.push({
    alumno: nombre,
    asignatura: asignatura,
    parcial1: p1,
    parcial2: p2,
    promedio: (parseInt(p1) + parseInt(p2)) / 2,
    condicion: promedios(p1, p2),
  });

  localStorage.setItem("data", JSON.stringify(datos));

  document.getElementById("formCalif").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Guardado',
    showConfirmButton: false,
    timer: 1800
  });
  crearTabla();
  cerrarModal();

  function crearTabla() {
    datos = JSON.parse(localStorage.getItem("data"));
    let fila = "";

    datos.forEach((item, i) => {
      fila += `<tr id=${i}>
                        <td>${item.alumno}</td>
                        <td>${item.asignatura}</td>
                        <td>${item.parcial1}</td>
                        <td>${item.parcial2}</td>
                        <td>${item.promedio}</td>
                        <td>${item.condicion}</td>
                        <td class="eliminar">X</td>
                    </tr>`;
    });
    document.getElementById("filas").innerHTML = fila;
    const eliminar = document.querySelectorAll(".eliminar");
    console.log(eliminar);
    
    eliminar.forEach((elem) =>
      elem.addEventListener("click", () => {
        elem.parentElement.remove();
      })
    );
  }

  
}
function promedios(p1, p2) {
  if ((parseInt(p1) + parseInt(p2)) / 2 >= 7) {
    return "Promociona";
  } else if ((parseInt(p1) + parseInt(p2)) / 2 >= 4) {
    return "Final";
  } else {
    return "Recursa";
  }
}

function cerrarModal() {
  document.getElementById("modal-registro").classList.remove("active");
}

window.addEventListener("DOMContentLoaded", crearTabla);

// registros profes
function ajax(){
  const xhttp = new XMLHttpRequest();
  
  xhttp.open('GET', 'datos.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
     
     let arregloDatos = JSON.parse(this.responseText);
     console.log(arregloDatos);
      
      let datoProfe = document.querySelector('#datoProfe');
      datoProfe.innerHTML ='';

      for (let item of arregloDatos) {
          datoProfe.innerHTML +=`
          <tr>
          <td>${item.profe}</td>
          <td>${item.materia}</td>
          <td>${item.escuelas}</td>
          </tr>`
      }
    }
  }

  xhttp.open("GET", url);
  xhttp.send();

}
document.getElementById("RegistroProfes").addEventListener("click", ajax);

