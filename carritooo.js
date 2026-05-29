let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio){
    carrito.push({nombre, precio});
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito(){
    const lista = document.getElementById("listaCarrito");
    const totalHtml = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    carrito.forEach((p, index) =>{
        let li = document.createElement("li");
        li.innerHTML = `
            ${p.nombre} - $${p.precio}
            <button class="btn-eliminar" onclick="eliminar(${index})">X</button>
        `;
        lista.appendChild(li);
    });

    totalHtml.textContent = total;
}

function eliminar(i){
    total -= carrito[i].precio;
    carrito.splice(i, 1);
    actualizarCarrito();
}

function vaciarCarrito(){
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function finalizarCompra(){
    if(carrito.length === 0){
        alert("El carrito está vacío");
        return;
    }
    alert("Compra finalizada. Total: $" + total);
    vaciarCarrito();
}

// Mostrar/Ocultar carrito
document.getElementById("btnCarrito").addEventListener("click", ()=>{
    document.getElementById("carritoPanel").classList.toggle("active");
});