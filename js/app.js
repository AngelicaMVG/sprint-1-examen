var estudiantes = [];
function obtenerListaEstudiantes( ) {
    // TO DO: Retornar la lista de estudiantes

    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var preguntas = ['Nombre: ', 'Puntos Tecnicos: ', 'Puntos HSE: '];
    var estudiante = [];
   for( var i = 0; i < preguntas.length; i++){
      var estudianteN = prompt(preguntas[i]).toLowerCase().trim();

    };
    var estudiante = new Object()
         estudianteN.nombre = preguntas[0],
         estudianteN.punTec =preguntas[1],
         estudianteN.punHse = preguntas[2]



    /*var estudiante = [];
      var nombre = prompt(preguntas[0]);
      var punTec = prompt(preguntas[1]);
      var punHse = prompt(preguntas[2]);*/
  /*  var estudianteN = new Object()
         estudianteN.nombre = nombre,
         estudianteN.punTec = punTec,
         estudianteN.punHse = punHse*/




      /*estudianteN = {

    var  nombre = prompt(preguntas[0]),
      var punTec = prompt(preguntas[1]),
      var punHse = prompt(preguntas[2]);

    }*/


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
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros

    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
