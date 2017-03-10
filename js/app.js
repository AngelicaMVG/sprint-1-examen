var estudiantes = [];
function obtenerListaEstudiantes( ){
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var nombreDelEstudiante = (prompt('Nombre del Estudiante:')).toUpperCase();
    var puntajeTecnico = prompt( 'Puntos Tecnicos del Estudiante:');
    var puntajeHse = prompt('Puntos HSE del Estudiante');

    var estudiante = {
      nombreDelEstudiante: nombreDelEstudiante,
      puntajeTecnico: puntajeTecnico,
      puntajeHse: puntajeHse
    }
    estudiantes.push(estudiante);
    return estudiante;

    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreDelEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var listaEstudiantes = '';
    estudiantes.forEach(function(alumno){
      listaEstudiantes += mostrar(alumno)
    });
    return listaEstudiantes;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    var estudianteFiltrado = estudiantes.filter(function(alumno){
      return alumno.nombreDelEstudiante.toLowerCase() == nombre.toLowerCase()
    });
    return estudianteFiltrado;
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor   \
    var puntajeTopTecnico = estudiantes.sort(function(item1, item2){
      item2.puntajeTecnico - item1.puntajeTecnico
    });
    return puntajeTopTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var puntajeTopHse = estudiantes.sort( function(item1, item2){
      item2.puntajeHse - item1.puntajeHse
    });
    return puntajeTopHse;
}
