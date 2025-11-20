let titulo = document.querySelector('.titulo');
let imagen = document.querySelector('.imagen');
let descripcion = document.querySelector('.descripcion');
let marca = document.querySelector('.marca');
let precio = document.querySelector('.precio');
let stock = document.querySelector('.stock');
let id = new URLSearchParams(location.search).get('id');

fetch(`https://dummyjson.com/products/${id}`)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        titulo.innerText = data.title;
        imagen.src = data.images;
        descripcion.innerText = data.description
        marca.innerText = data.brand;
        precio.innerText = data.price;
        stock.innerText = `Actualmente hay: ${data.stock} disponibles!`
    })
    .catch(function(error) {
        console.log('El error es: ' + error);
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

//reseña dinamica