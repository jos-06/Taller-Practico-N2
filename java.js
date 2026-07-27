
const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", function () {

    const texto = buscador.value.toLowerCase();

    productos.forEach(function(producto){

        const nombre = producto.querySelector(".nombre").textContent.toLowerCase();

        if(nombre.includes(texto)){
            producto.style.display = "block";
        }else{
            producto.style.display = "none";
        }

    });

});



const botones = document.querySelectorAll(".agregar");
const listaCarrito = document.getElementById("listaCarrito");
const totalTexto = document.getElementById("total");

let total = 0;

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        const producto = boton.parentElement;

        const nombre = producto.querySelector(".nombre").textContent;

        const precio = Number(producto.querySelector(".precio").textContent);

        // Crear elemento del carrito
        const item = document.createElement("li");
        item.textContent = nombre + " - $" + precio.toFixed(2);

        listaCarrito.appendChild(item);

   
        total += precio;
        totalTexto.textContent = "$" + total.toFixed(2);

    });

});