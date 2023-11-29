const btn = document.querySelector("#btn");
const body = document.body;

let blackModeStorage = localStorage.getItem("modo-oscuro");

function activarBlackMode() {
    body.classList.add("black-mode");
    localStorage.setItem("modo-oscuro", "activado");
}

function desactivarBlackMode() {
    body.classList.remove("black-mode");
    localStorage.setItem("modo-oscuro", "desactivado");
}

btn.addEventListener("click", () => {
    blackModeStorage = localStorage.getItem("modo-oscuro");
    if (blackModeStorage === "activado") {
        desactivarBlackMode();
    } else {
        activarBlackMode();
    }
});