
function sprintAlert (parent, alert) {

    const alertExist = document.querySelector(".alert");

    if(alertExist) {
        alertExist.remove();
    }

    // Crear la alerta
    const paragraphAlert = document.createElement("P");
    paragraphAlert.classList.add("alert");
    paragraphAlert.textContent = alert;

    parent.parentElement.appendChild(paragraphAlert);
    parent.classList.add("alert-input")
}

function removeAlert (parent) {
    const alertExist = document.querySelector(".alert");

    if(parent.classList.contains("alert-input") && alertExist) {
        parent.classList.remove("alert-input");
        alertExist.remove();
    }
}

export {
    sprintAlert,
    removeAlert
}