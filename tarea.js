/*Datos del cliente*/
let cliente = "Maria";

/*Lista de productos*/
let productos =[
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 2000}
]

/*Calcular el total*/

let total = 0;
productos.map(producto=>{total += producto.precio});

/*Crear la factura en html*/

let factura = `
<h2>Resultado</h2>
<p>Cliente: ${Cliente}</p>
<p>Productos:</p>
<ul> ${productos.map(producto => `<li>${producto.nombre}:$${producto.precio}</li>`).join("")} </ul>
<p> Total: $${total}</p>
`;

/*Mostrar la factura en la pagina*/

document.getElementById("factura").innerHTML = factura;

/*Mostrar la informacion en la consola*/

console.log (`Cliente: ${cliente}`);

productos.map(producto =>{
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log (`Total: $${total}`);