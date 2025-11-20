let palabraBuscada = obj.get("search");
console.log(palabraBuscada);

fetch(`https://dummyjson.com/products=${palabraBuscada}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
     //terminar   
    })
   .catch(function (error) {
            console.log(`El error es:` + error);
            
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
    