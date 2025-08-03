function verificarCodigo(event) {
    event.preventDefault();

    const codigoIngresado = document.getElementById("password").value;
    const codigoCorrecto = "1423";
    const errorMessage = document.querySelector(".error-message");
    const form = document.querySelector(".my-form");
    const language = document.getElementById('language').value;

    if (codigoIngresado === codigoCorrecto) {
        sessionStorage.setItem("accesoPermitido", "true");

        let url = "experiencias/";
        switch (language) {
            case 'es':
                url += "español.html";
                break;
            case 'en':
                url += "english.html";
                break;
            case 'fr':
                url += "frances.html";
                break;
            case 'it':
                url += "italiano.html";
                break;
            case 'pt':
                url += "portugues.html";
                break;
            case 'pl':
                url += "polaco.html";
                break;
            case 'ru':
                url += "ruso.html";
                break;
            case 'de':
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

if (window.location.pathname.includes("/experiencias/")) {
    if (sessionStorage.getItem("accesoPermitido") !== "true") {
        window.location.href = "../index.html";
    } else {
        sessionStorage.removeItem("accesoPermitido");
    }
}

function soloNumeros(event) {
    let key = event.key;
    return /^[0-9]$/.test(key);
}

// Header

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const numeroSala = parseInt(button.getAttribute('data-sala'));

        updateHeaderValue(numeroSala);

        document.querySelectorAll('.sala').forEach(sala => sala.classList.remove('active'));
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

        const salaActiva = document.getElementById(`sala-${numeroSala}`);
        if (salaActiva) salaActiva.classList.add('active');

        button.classList.add('active');
    });
});

function updateHeaderValue(numeroSala) {
    const btn0 = document.querySelector('.tab-button[data-sala="0"]');
    const btn15 = document.querySelector('.tab-button[data-sala="15"]');

    if ([12, 13, 14, 15].includes(numeroSala)) {
        if (btn0) btn0.classList.add('invisible');
        if (btn15) btn15.classList.remove('invisible');
    } else {
        if (btn0) btn0.classList.remove('invisible');
        if (btn15) btn15.classList.add('invisible');
    }
}

// Audios

  let currentAudio = null;

document.addEventListener("DOMContentLoaded", () => {
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


