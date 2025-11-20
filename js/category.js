function cargarProductos() {
    let category = new URLSearchParams(location.search).get('cat');
    fetch(`https://dummyjson.com/products`)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            const lista = document.querySelector('.productos');

            for (let i = 0; i < productos.length ; i++) {
                const p= productos[i];
                if (p.category && productos.category === category){
                    lista.innerHTML+=`
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
            }
        })
        .catch(function (error) {
            console.log(`El error es:` + error);
            
        });
}

document.querySelector("#cargarMas").addEventListener("click", cargarProductos)
cargarProductos();

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


//ver q esta pasando