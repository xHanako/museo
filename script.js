function verificarCodigo(event) {
    event.preventDefault();

    const codigoIngresado = document.getElementById("password").value;
    const codigoCorrecto = "5104";
    const errorMessage = document.querySelector(".error-message");
    const form = document.querySelector(".my-form");
    const language = document.getElementById("language").value;
    const version = document.getElementById("version").value; // NUEVO

    if (codigoIngresado === codigoCorrecto) {
        sessionStorage.setItem("accesoPermitido", "true");

        // Carpeta base según versión
        let url = `experiencias/${version}/`;

        switch (language) {
            case "es":
                url += "español.html";
                break;
            case "en":
                url += "english.html";
                break;
            case "fr":
                url += "frances.html";
                break;
            case "it":
                url += "italiano.html";
                break;
            case "de":
                url += "aleman.html";
                break;
            default:
                url += "español.html";
        }

        window.location.href = url;
        form.reset();
    } else {
        errorMessage.style.display = "block";
    }
}

function soloNumeros(event) {
    let key = event.key;
    return /^[0-9]$/.test(key);
}

// Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {

    // Protección de acceso a experiencias
    if (window.location.pathname.includes("/experiencias/")) {
        const acceso = sessionStorage.getItem("accesoPermitido");

        if (acceso !== "true") {
            window.location.href = "../../index.html"; // Ajusta según tu estructura
        } else {
            // Borra el permiso para que al recargar vuelva al index
            sessionStorage.removeItem("accesoPermitido");
        }
    }

    // Tabs de salas
    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const numeroSala = parseInt(button.dataset.sala);

            updateHeaderValue(numeroSala);

            document.querySelectorAll(".sala").forEach(sala =>
                sala.classList.remove("active")
            );
            document.querySelectorAll(".tab-button").forEach(btn =>
                btn.classList.remove("active")
            );

            const salaActiva = document.getElementById(`sala-${numeroSala}`);
            if (salaActiva) salaActiva.classList.add("active");

            button.classList.add("active");
        });
    });

    // Manejo de audios
    let currentAudio = null;
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
            }
            currentAudio = audio;
        });

        audio.addEventListener("pause", () => {
            if (currentAudio === audio) {
                currentAudio = null;
            }
        });
    });
});

// Función para ocultar/mostrar botones según sala
function updateHeaderValue(numeroSala) {
    const btn0 = document.querySelector('.tab-button[data-sala="0"]');
    const btn15 = document.querySelector('.tab-button[data-sala="15"]');

    if ([12, 13, 14, 15].includes(numeroSala)) {
        if (btn0) btn0.classList.add("invisible");
        if (btn15) btn15.classList.remove("invisible");
    } else {
        if (btn0) btn0.classList.remove("invisible");
        if (btn15) btn15.classList.add("invisible");
    }
}
