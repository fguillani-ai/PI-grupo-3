localStorage.clear();
let form = document.querySelector(".formularioR");
let nombreUsuario = "";

form.addEventListener("submit", function(e){
    let usuario = {
        nombre: this.nombre.value,
        apellido: this.apellido.value,
        email: this.email.value,
        contra: this.contra1.value
    }
    let c1 = this.contra1.value;
    let c2 = this.contra2.value;

    e.preventDefault();

    localStorage.setItem('nombreUsuario', usuario.nombre);
});

//validar que se acepten los terminos y condiciones
form.addEventListener('submit', function (e){
    let acepto = this.elements['G'].checked;
    if (!acepto) {
        e.preventDefault();
        alert('Debes aceptar los términos y condiciones.')
        return;
    }
  })

//barra de navegador
window.addEventListener('load', function() {
    let formulario = document.querySelector('.search');
    let busqueda = document.querySelector('.buscador');
    formulario.addEventListener('submit', function(e){
        let valor = busqueda.value;
        if (valor === ""){
            e.preventDefault();
            alert("El Campo de busqueda no puede estar vacío.");
        } else if (valor.length < 3){
            e.preventDefault();
            alert("La busqueda debe tener al menos 3 caracteres.");
        }
    });
});

//terminar validacion
window.addEventListener('load', function() {
    let formulario = document.querySelector('.formularioR');
    
    let inputEmail = document.querySelector('.mail');
    let inputPass = document.querySelector('.passw');
    let contra2 = document.querySelector('contras');

    formulario.addEventListener('submit', function(e) {
        
        let boton = e.submitter;
        let accion = boton.getAttribute('formaction');

        if (accion && accion.includes('login.html')) {
            return; 
        }

        e.preventDefault();

        let errores = false;
        let valorEmail = inputEmail.value;
        let valorContra = inputPass.value;
        let contra2 = contra2.value;

       if (valorEmail === "") {
           alert("El campo email es obligatorio.");
           errores = true;
       }
       else if (valorContra === "") {
           alert("El campo contraseña es obligatorio.");
           errores = true;
       }
       else if (valorContra.length < 6) {
           alert("La contraseña debe tener al menos 6 caracteres.");
           errores = true;
       }
       else if (valorContra !== contra2) {
           alert("Las contraseñas no coinciden.");
           errores = true;
       }
       if (!errores) {
           window.location.href = 'login.html';
       }
    });
});