document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el color de fondo de la sección de bienvenida
    cambiarColorFondoBienvenida();
});

function cambiarColorFondoBienvenida() {
    // Array de colores vivos para el fondo
    var coloresFondo = ["#ffdc34", "#ff6961", "#7ec8e3", "#ffa07a", "#98fb98"];

    // Seleccionar la sección de bienvenida
    var seccionBienvenida = document.querySelector(".jumbotron");

    // Cambiar el color de fondo aleatoriamente
    var colorAleatorio = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];
    seccionBienvenida.style.backgroundColor = colorAleatorio;
}
