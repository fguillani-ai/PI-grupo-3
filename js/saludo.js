fetch(`https://dummyjson.com/products`)
window.addEventListener('load', function() {

   let usuario = localStorage.getItem('usuarioLogueado');

   if (usuario != null) {
      
       let login = document.querySelector('a[href="login.html"]');
       let registro = document.querySelector('a[href="register.html"]');
      
       if (login) {
           login.parentElement.style.display = 'none';
       }
       if (registro) {
           registro.parentElement.style.display = 'none';
       }


       let lista1 = document.querySelector('.navSup ul');


       let lista2 = document.createElement('li');
       lista2.innerHTML = `<a href="#">Bienvenido: ${usuario}</a>`;
      
       let logout = document.createElement('li');
       logout.innerHTML = `<a href="#" id="botonLogout">Logout</a>`;


       lista1.appendChild(lista2);
       lista1.appendChild(logout);


       let botonLogout = document.querySelector('#botonLogout');
      
       botonLogout.addEventListener('click', function(e) {
           e.preventDefault();
          
           localStorage.removeItem('usuarioLogueado'); 
          
           window.location.href = 'index.html';
       });
   }
});