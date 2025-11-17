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
    
    localStorage.setItem('nombreUsuario', usuario.nombre);
});

//validar email (largo y arroba)
let cantArrobas = 1;
let i = 0;
function emailValido(email, minimo = 6) {
    if (email.lenth < minimo) return false;
    for (let i=0; i < email.length; i++){
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

//validar que se acepten los terminos y condiciones
