// validar e mail, validar contraseña ¿Guardar info si pone recordarme?
window.addEventListener('load', function() {
   let formulario = document.querySelector('.formularioL');
   let name = document.querySelector('.nombre');
   let email = document.querySelector('.email');
   let password = document.querySelector('.contra');


   formulario.addEventListener('submit', function(evento) {
       evento.preventDefault();

       let errores = false;

       if (email.value == "") {
           alert("El campo email es obligatorio.");
           errores = true;
       }
       else if (password.value == "") {
           alert("El campo contraseña es obligatorio.");
           errores = true;
       }
       else if (password.value.length < 6) {
           alert("La contraseña debe tener al menos 6 caracteres.");
           errores = true;
       }


       if (!errores) {
           localStorage.setItem('usuarioLogueado', name.value);
           window.location.href = 'index.html';
       }
   });
});


// barra de navegador
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
    