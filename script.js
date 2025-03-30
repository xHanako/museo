function verificarCodigo(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const codigoIngresado = document.getElementById("password").value;
    const codigoCorrecto = "2506"; // Código correcto
    const errorMessage = document.querySelector(".error-message");

    if (codigoIngresado === codigoCorrecto) {
        window.location.href = "experiencia.html"; // Redirige si el código es correcto
    } else {
        errorMessage.style.display = "block"; // Muestra mensaje de error
    }
}

function soloNumeros(event) {
    let key = event.key;
    return /^[0-9]$/.test(key); // Solo permite números del 0 al 9
}
