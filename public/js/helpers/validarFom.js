
import { sprintAlert, removeAlert } from "./utilidades.js";

const form = document.querySelector("#form");

function validarFom () {
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let alert;

        const inputEmail = form.firstElementChild.firstElementChild;
        
        if(inputEmail.value === "") {
            alert = "Oh! Looks like you forgot to add your email";
            sprintAlert(inputEmail, alert);
            return;
        } 

        if (!validarEmail(inputEmail.value)) {
            alert = "Please provide a valid email address";
            sprintAlert(inputEmail, alert);
            return;
        }

        removeAlert(inputEmail);
    });
}

function validarEmail(email) {
    const regex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

    return regex.test(email);
}

export default validarFom;

