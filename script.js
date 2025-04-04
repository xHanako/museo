function verificarCodigo(event) {
    event.preventDefault();

    const codigoIngresado = document.getElementById("password").value;
    const codigoCorrecto = "2506";
    const errorMessage = document.querySelector(".error-message");
    const form = document.querySelector(".my-form");

    if (codigoIngresado === codigoCorrecto) {
        sessionStorage.setItem("accesoPermitido", "true");
        window.open("experiencia.html", "_blank");
        form.reset();
    } else {
        errorMessage.style.display = "block";
    }
}

if (window.location.pathname.includes("experiencia.html") || window.location.pathname.includes("experience.html")) {
    if (sessionStorage.getItem("accesoPermitido") !== "true") {
        window.location.href = "index.html";
    } else {
        sessionStorage.removeItem("accesoPermitido");
    }
}

function soloNumeros(event) {
    let key = event.key;
    return /^[0-9]$/.test(key);
}

document.getElementById('start-experience').addEventListener('click', function() {
    var language = document.getElementById('language').value;
    if (language === 'es') {
        window.location.href = 'experiencia.html';
    } else if (language === 'en') {
        window.location.href = 'experience.html';
    }
});
