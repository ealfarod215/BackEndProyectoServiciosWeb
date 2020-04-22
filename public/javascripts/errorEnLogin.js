const errorRegistro = document.querySelector(".errorR")

document.addEventListener('DOMContentLoaded', function () {
    if (errorRegistro.innerHTML.match('Acceso denegado, Credenciales Invalidas !!!')) {
        errorRegistro.style.padding = "";
        errorRegistro.style.color = "#721c24";
        errorRegistro.style.borderRadius = ".25rem";
        errorRegistro.style.backgroundColor = "#f8d7da";
        errorRegistro.style.border = "1px solid #b33636";


    } else {
        error.style.padding = "0px 0px 0px 0px"
    }
}, false);