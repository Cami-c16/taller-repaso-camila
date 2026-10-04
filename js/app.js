// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// SELECCIÓN DE ELEMENTOS DEL DOM

// getElementById busca un elemento HTML por su atributo id.
// Usamos 'btn-toggle-tema' porque es el ID del botón
// que utilizaremos para cambiar entre los temas.
const btnTema = document.getElementById("btn-toggle-tema");

// Seleccionamos el body directamente porque allí
// agregaremos o quitaremos la clase del modo oscuro.
const body = document.body;


// MANEJO DE EVENTOS

// El evento 'click' se ejecuta cuando el usuario presiona
// el botón. La función anónima contiene las acciones
// que se realizarán después de hacer clic.
btnTema.addEventListener("click", function () {

    // classList.toggle funciona como un interruptor:
    // si la clase 'tema-oscuro' no existe, la agrega;
    // si ya existe, la elimina.
    body.classList.toggle("tema-oscuro");

    // Verificamos si el body tiene actualmente
    // la clase 'tema-oscuro'.
    if (body.classList.contains("tema-oscuro")) {

        // Si está activo el modo oscuro, cambiamos
        // el texto del botón para permitir volver al
        // modo claro.
        btnTema.textContent = "☀️ Modo Claro";

    } else {

        // Si el modo oscuro está desactivado,
        // mostramos nuevamente el texto para activarlo.
        btnTema.textContent = "🌙 Cambiar Tema";
    }

});


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// Seleccionamos el párrafo donde aparecerá
// el saludo dependiendo de la hora actual.
const textoSaludo = document.getElementById("saludo-tiempo-real");

// Creamos un objeto Date para obtener la fecha
// y hora actual del sistema.
const fechaActual = new Date();

// Obtenemos solamente la hora actual.
const horaActual = fechaActual.getHours();

// Creamos una variable para guardar el mensaje.
let mensaje = "";


// Determinamos el saludo dependiendo de la hora.
if (horaActual >= 6 && horaActual < 12) {

    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";

} else if (horaActual >= 12 && horaActual < 18) {

    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";

} else {

    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}


// textContent coloca texto dentro del elemento HTML.
// Lo usamos en este caso porque solo necesitamos mostrar
// un mensaje de texto y no código HTML.
textoSaludo.textContent = mensaje;