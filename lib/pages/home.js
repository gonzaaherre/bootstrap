//IMPORTACIONES
import { getAllproducts } from "../service/products.js"

//INSTANCIAS DE ELEMENTOS
const contenedor_porhacer = document.getElementById('contenedor-porhacer')
const contenedor_enproduccion = document.getElementById('contenedor-enproduccion')
const contenedor_portestear = document.getElementById('contenedor-portestear')
const contenedor_terminada = document.getElementById('contenedor-terminada')


const fillProducts = async () => {
    const products = await getAllproducts();
    products.forEach(products => { // Cambiar "products" a "product" para representar un producto individual
        const status = products.status;
        let container;
        if (status === "por hacer") {
            container = contenedor_porhacer;
        } else if (status === "en produccion") {
            container = contenedor_enproduccion;
        } else if (status === "por testear") {
            container = contenedor_portestear;
        } else if (status === "terminada") {
            container = contenedor_terminada;
        }


        console.log(products);


        // Crear elemento en la categoría
        container.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img 
                style="min-height:300px; max-height:300px;"
                class="card-img-top" 
                src="${products}" 
                alt="">
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${products.title}</h5> 
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class "text-center d-flex gap-1">
                        <a href="/detalle.html?id=${products.id}" class="btn btn-outline-secondary mt-auto">Ver más</a> // Cambiar "products.id" a "product.id"
                        <a href="" class="btn btn-outline-success mt-auto">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    });
}

await fillProducts();
