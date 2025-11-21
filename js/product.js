let titulo = document.querySelector('.titulo');
let imagen = document.querySelector('.imagen');
let descripcion = document.querySelector('.descripcion');
let marca = document.querySelector('.marca');
let precio = document.querySelector('.precio');
let stock = document.querySelector('.stock');
let id = new URLSearchParams(location.search).get('id');
let cateLink = document.querySelector('.cate');
let nombre = document.querySelector('.usuarioR');
let fecha = document.querySelector('.fechaR');
let rating = document.querySelector('.estrellasR');
let text = document.querySelector('.comentarioR');

fetch(`https://dummyjson.com/products/${id}`)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        console.log(data);
        
        titulo.innerText = data.title;
        imagen.src = data.images[0];
        descripcion.innerText = data.description;
        marca.innerText = data.brand;
        precio.innerText = data.price;
        stock.innerText = `Actualmente hay: ${data.stock} disponibles!` 
        if(data.category != undefined){
            cateLink.textContent = `categoria: ${data.category}`;
            cateLink.href = `category.html?cate = ${data.category}`;
        }
        nombre.innerText = data.reviwerName;
        fecha.innerText = data.date;
        rating.innerText = data.rating;
        text.innerText = data.comment;

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

//reseña dinamica....