const pantallaInicio = document.getElementById("pantallaInicio");

const pantallaPregunta1 = document.getElementById("pantallaPregunta");
const pantallaPregunta2 = document.getElementById("pantallaPregunta2");
const pantallaPregunta3 = document.getElementById("pantallaPregunta3");
const pantallaPregunta4 = document.getElementById("pantallaPregunta4");
const pantallaPregunta5 = document.getElementById("pantallaPregunta5");
const pantallaPregunta6 = document.getElementById("pantallaPregunta6");
const pantallaPregunta7 = document.getElementById("pantallaPregunta7");
const pantallaPregunta8 = document.getElementById("pantallaPregunta8");
const pantallaPregunta9 = document.getElementById("pantallaPregunta9");
const pantallaPregunta10 = document.getElementById("pantallaPregunta10");

const pantallaError = document.getElementById("pantallaError");
const pantallaCorrecto = document.getElementById("pantallaCorrecto");

const botonEmpezar = document.getElementById("botonEmpezar");
const botonVolver = document.getElementById("botonVolver");
const botonSiguiente = document.getElementById("botonSiguiente");

const respuestaCorrecta1 = document.getElementById("respuestaCorrecta");
const respuestaCorrecta2 = document.getElementById("respuestaCorrecta2");
const respuestaCorrecta3 = document.getElementById("respuestaCorrecta3");
const respuestaCorrecta4 = document.getElementById("respuestaCorrecta4");
const respuestaCorrecta5 = document.getElementById("respuestaCorrecta5");
const respuestaCorrecta6 = document.getElementById("respuestaCorrecta6");
const respuestaCorrecta7 = document.getElementById("respuestaCorrecta7");
const respuestaCorrecta8 = document.getElementById("respuestaCorrecta8");
const respuestaCorrecta9 = document.getElementById("respuestaCorrecta9");
const respuestaCorrecta10 = document.getElementById("respuestaCorrecta10");

const respuestasIncorrectas = document.querySelectorAll(".incorrecta");

let numeroPregunta = 1;
let puntos = 0;

function ocultarTodo() {
    pantallaInicio.classList.add("oculto");

    pantallaPregunta1.classList.add("oculto");
    pantallaPregunta2.classList.add("oculto");
    pantallaPregunta3.classList.add("oculto");
    pantallaPregunta4.classList.add("oculto");
    pantallaPregunta5.classList.add("oculto");
    pantallaPregunta6.classList.add("oculto");
    pantallaPregunta7.classList.add("oculto");
    pantallaPregunta8.classList.add("oculto");
    pantallaPregunta9.classList.add("oculto");
    pantallaPregunta10.classList.add("oculto");

    pantallaError.classList.add("oculto");
    pantallaCorrecto.classList.add("oculto");
}

function mostrarPreguntaActual() {
    ocultarTodo();

    if (numeroPregunta === 1) {
        pantallaPregunta1.classList.remove("oculto");
    }

    if (numeroPregunta === 2) {
        pantallaPregunta2.classList.remove("oculto");
    }

    if (numeroPregunta === 3) {
        pantallaPregunta3.classList.remove("oculto");
    }

    if (numeroPregunta === 4) {
        pantallaPregunta4.classList.remove("oculto");
    }

    if (numeroPregunta === 5) {
        pantallaPregunta5.classList.remove("oculto");
    }

    if (numeroPregunta === 6) {
        pantallaPregunta6.classList.remove("oculto");
    }

    if (numeroPregunta === 7) {
        pantallaPregunta7.classList.remove("oculto");
    }

    if (numeroPregunta === 8) {
        pantallaPregunta8.classList.remove("oculto");
    }

    if (numeroPregunta === 9) {
        pantallaPregunta9.classList.remove("oculto");
    }

    if (numeroPregunta === 10) {
        pantallaPregunta10.classList.remove("oculto");
    }
}

function respuestaBien() {
    puntos = puntos + 1;

    ocultarTodo();
    pantallaCorrecto.classList.remove("oculto");
}

function respuestaMal() {
    ocultarTodo();
    pantallaError.classList.remove("oculto");
}

botonEmpezar.addEventListener("click", function() {
    numeroPregunta = 1;
    puntos = 0;

    ocultarTodo();
    pantallaPregunta1.classList.remove("oculto");
});

respuestaCorrecta1.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta2.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta3.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta4.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta5.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta6.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta7.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta8.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta9.addEventListener("click", function() {
    respuestaBien();
});

respuestaCorrecta10.addEventListener("click", function() {
    respuestaBien();
});

respuestasIncorrectas.forEach(function (boton) {
    boton.addEventListener("click", function() {
        respuestaMal();
    });
});

botonVolver.addEventListener("click", function() {
    mostrarPreguntaActual();
});

botonSiguiente.addEventListener("click", function() {
    numeroPregunta = numeroPregunta + 1;

    if (numeroPregunta <= 10) {
        mostrarPreguntaActual();
    } else {
        ocultarTodo();

        pantallaCorrecto.classList.remove("oculto");
        pantallaCorrecto.classList.add("pantalla-final");

        pantallaCorrecto.innerHTML = `
        <section class="caja-final">
        <h2>Juego terminado</h2>
        <p>Has conseguido ${puntos} puntos de 10.</p>
        <button type="button" onclick="location.reload()">Volver a jugar</button>
        </section>
        `;
    }
});