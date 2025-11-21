let categoria = new URLSearchParams(location.search).get('cate');
let titulo = document.querySelector('#categoriaH2')
function cargarCategorias() {
    fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            let lista = document.querySelector('.productos');
            titulo.innerText = `Categoria: ${categoria}`;

            for (let i = 0; i < data.products.length; i++) {
                let p = data.products[i];
                let mercancia =`
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
                lista.innerHTML += mercancia;       
                }
            })
        .catch(function (error) {
            console.log(`El error es:` + error);
            
        });
}
cargarCategorias();

document.querySelector("#cargarMas").addEventListener("click", cargarCategorias)


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
