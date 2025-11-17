let saludo = document.querySelector(".saludo");
let recuperoStorage = localStorage.getItem('nombreUsuario');
saludo.textContent = `Bienvenido, ${recuperoStorage}`;