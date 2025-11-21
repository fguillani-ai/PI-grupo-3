document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.formularioR');
  if (!form) return;

  const inputNombre = form.elements['nombre'];
  const inputApellido = form.elements['apellido'];
  const inputEmail = form.elements['email'];
  const inputPass1 = form.elements['contra1'];
  const inputPass2 = form.elements['contra2'];
  const checkTerminos = form.elements['G'];

  const bIngresar = document.getElementById('bIngresar'); 
  const bTengoCuenta = document.getElementById('bTengoCuenta'); 

  let accion = '';

  bIngresar.addEventListener('click', function () {
    accion = 'ingresar';
  });

  bTengoCuenta.addEventListener('click', function (e) {
    e.preventDefault();    
    window.location.href = 'login.html';
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();  

    if (accion !== 'ingresar') return;

    const nombre = (inputNombre.value || '').trim();
    const apellido = (inputApellido.value || '').trim();
    const email = (inputEmail.value || '').trim();
    const pass1 = inputPass1.value || '';
    const pass2 = inputPass2.value || '';

    if (nombre.length < 4) { 
        alert('El nombre debe tener al menos 4 caracteres.'); inputNombre.focus(); 
        return; 
    }

    if (apellido.length < 4){ 
        alert('El apellido debe tener al menos 4 caracteres.');
        inputApellido.focus(); 
        return; 
    }

    if (email.indexOf('@') === -1){ 
        alert('El email debe contener un "@".'); 
        inputEmail.focus(); 
        return; 
    }

    if (pass1.length < 6){ 
        alert('La contraseña debe tener al menos 6 caracteres.');
        inputPass1.focus(); 
        return; 
    }

    if (pass1 !== pass2){ 
        alert('Las contraseñas no coinciden.'); 
        inputPass2.focus(); 
        return; 
    }

    if (!checkTerminos.checked){ 
        alert('Debes aceptar los términos y condiciones.'); 
        checkTerminos.focus(); 
        return; 
    }

    localStorage.setItem('nombreUsuario', nombre);
    window.location.href = 'index.html';
  });
});

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