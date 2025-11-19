let inicio= 0
let suma= 10

function cargarProductos() {
fetch(`https://dummyjson.com/products`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    
        const lista = document.querySelector(`.productoD .productos`);
        let mercancia= "";
        for (let i = inicio; i < inicio + suma && i < data.products.length ; i++) {
            const p= data.products[i];
            mercancia +=`
            <div class="articulo">
                 <img class= "image" src= "${p.thumbnail}" alt="${p.title}">
                <div class="a-content">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <p>$${p.price}</p>
                    <a href="product.html?id=${p.id}" class="boton">ver más</a>
                </div>
            </div>
            `;    
        }
        lista.innerHTML += mercancia; 
        inicio += suma
    })
    .catch(function (error) {
        console.log(`El error es:` + error);
        
    });
}
document.querySelector("#cargarMas").addEventListener("click", cargarProductos)
cargarProductos();

let mensaje = "Estimado cliente, realizar su pedido debe iniciar sesion! Muchas gracias:)";
alert(mensaje);

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
    