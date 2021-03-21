let contenedor = document.getElementById("div");
let mostrarDatos = document.getElementById("mostrar-datos");
let lista2 = document.getElementById("lista-2");

let nombres = ["Walter", "Sandra", "Ezequiel", "Jesica", "Lucas", "Alejo", "Joaquin", "Camila"];
let apellidos = ["Perez", "De Vita", "Gonzalez", "Quinteiro"];

let Mostrar = document.createElement("button");
let siguiente = document.createElement("button");
let salir = document.createElement("button");
let anterior = document.createElement("button");

let ingreso = document.createElement("input");

let datos = document.createElement("div");
let contenedorBTNsalir= document.createElement("div");
let contenedorBTNnext = document.createElement("div");
let contenedorBTNanterior = document.createElement("div");
let listaApellidos = document.createElement("div");
let contenedorApellidos = document.createElement("div");

Mostrar.textContent = "Lista de personajes"
Mostrar.className = "btn-entrar"
Mostrar.onclick = mostrar

mostrarDatos.appendChild(contenedorBTNsalir);
mostrarDatos.appendChild(datos);

lista2.appendChild(listaApellidos);
listaApellidos.appendChild(contenedorApellidos);
listaApellidos.appendChild(contenedorBTNanterior);

contenedor.appendChild(Mostrar);
contenedor.appendChild(ingreso);

contenedorBTNsalir.appendChild(salir);
contenedorBTNanterior.appendChild(anterior)

salir.textContent = "Salir"
salir.className = "btn-salir"

siguiente.textContent = "next"
siguiente.className = "btn-next"
siguiente.onclick = next

ingreso.className = "input"
ingreso.placeholder = "ingrese personaje"

contenedorBTNnext.className = "contenedor-btn-next"
contenedorBTNsalir.className = "contenedor-btn-salir"

datos.className = "contenedor-data"

listaApellidos.className = "listaApellidos"
contenedorApellidos.className = "contenedorApellidos"

anterior.textContent = "Atras"
anterior.className = "btn-ant"
anterior.onclick = atras

function mostrar() {
    
    for (let i=0;i<nombres.length;i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        mostrarDatos.appendChild(datos)
        datos.appendChild(li)
        li.appendChild(a);
        li.className = "lista"
        a.className = "lista-datos"
        a.href = "#"
        a.innerText = nombres[i];
        mostrarDatos.classList.add(`active`)
        
        mostrarDatos.appendChild(contenedorBTNnext);
        contenedorBTNnext.appendChild(siguiente);

        salir.addEventListener("click", function() {
            datos.removeChild(li);
            mostrarDatos.classList.remove(`active`);
        })
    }
    
    return
}    

function next() {
    mostrarDatos.classList.remove(`active`)
    
    
    for (let i=0;i<apellidos.length;i++) {
        let contap = document.createElement("li");
        let ap = document.createElement("a");
        contenedorApellidos.appendChild(contap)
        contap.appendChild(ap)
        ap.href = "#"
        ap.className = "ap"
        ap.innerText =apellidos[i]
        console.log(apellidos[i])
        lista2.classList.add(`active`)
    }
    return
}

function atras() {

    lista2.classList.remove(`active`)

    for (let i=0;i<nombres.length;i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        mostrarDatos.appendChild(datos)
        datos.appendChild(li)
        li.appendChild(a);
        li.className = "lista"
        a.className = "lista-datos"
        a.href = "#"
        a.innerText = nombres[i];
        mostrarDatos.classList.add(`active`)
        
        mostrarDatos.appendChild(contenedorBTNnext);
        contenedorBTNnext.appendChild(siguiente);

        salir.addEventListener("click", function() {
            datos.removeChild(li);
            mostrarDatos.classList.remove(`active`);
        })
    }
    
    return
}