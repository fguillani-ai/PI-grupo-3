//guardo el nombre del usuario
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

//validar email (largo y arroba)
let cantArrobas = 0;
let i = 0;
function emailValido(email, minimo = 6) {
    if (email.length < minimo) return false;

    cantArrobas = 0;
    for (i = 0; i < email.length; i++) {
        if(email[i]==="@"){
            cantArrobas++;
            if (cantArrobas > 1){
                return false;
            }
        }
    }
    return cantArrobas ===1;    
}

//validar contraseñas (largo e iguales)
let n = 0;
let t = 0;
function contraValida(contra1, contra2, minimo=6) {
    if (contra1.length<minimo || contra2.length<minimo) return false;
    if (contra1.length !== contra2.length) return false; 

    for (t = 0, n = 0; t < contra1.length; t++){
        if (contra1[t] === contra2[t]){
            n++;
        }
        else{
            return false;  
        } 
    }
    return n === contra1.length;
}

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
    