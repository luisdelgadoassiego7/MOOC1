'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden'); //Se muestra el botón
}

function installPWA(evt) {
    deferredInstallPrompt.prompt(); //Cuando el usuario ha hecho click en el prompt, se pregunta quiere instalar la PWA
    evt.srcElement.getAttribute('hidden', true); // Se oculta el botón de instalar de nuevo
    deferredInstallPrompt.userChoice.then((choice) => {
        if(choice.outcome = "accepted") {
            console.log("aceptado")
        } else {
            console.log("No aceptado")
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    console.log('App de pelis instalada')
}