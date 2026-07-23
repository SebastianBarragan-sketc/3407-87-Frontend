let nombre = "Carlos";
let saludo = "hola" + nombre + "!";

/*con template string*/
let nombre = "carlos";
let saludo = `hola ${nombre}!`;

console.log (saludo); 

/*interpolacion de variables*/

let producto = "Laptop";
let precio = 1200;

let mensaje = `El producto ${producto} cuesta $${precio}`;

console.log (mensaje);

/*Ejemplo con expresiones*/

let a = 5;
let b = 10;

console.log (`la suma es ${a + b }`);

/*Ejemplo con  funciones*/

function obtenerIVA(precio) {
    return precio = 0.19;
}

let precio = 100;

console.log(`El IVA es ${ObtenerIVA(precio)}`);

/*Cadenas multiples*/

let texto = "Linea 1\n" +
            "Linea 2\n" +
            "Linea 3";

console.log(texto);

/*Con template string*/

let texto = `
Linea 1
Linea 2
Linea 3
`;

console.log(texto);

/*Ejemplo practico real*/

let usuario = {
    nombre= "ana",
    edad: 25,
    pais: "Colombia"
};

let html = `
<div class="usuario">
 <h2>${usuario.nombre}</h2>
 <p>Edad: ${usuario.edad}</p>
 <p>Pais: ${usuario.pais}<p>
</div>
`;

/*Ejemplo practico con listas*/

let productos = ["Laptop", "Mouse", "Teclado"];

let lista = `
<ul>
  ${productos.map(p => `<li>${p}</li>`).join("")}
</ul>
`;

console.log(lista);

/*Ejemplo practico con objetos*/

let persona ={
    nombre: "Luis",
    edad: 30,
    profesion: "Desarrollador"
};

let descripcion = `
Nombre: ${persona.nombre}
Edad: ${persona.edad}
Profesion: ${persona.profesion}
`;

console.log(descripcion);

/*uso en mensajes dinamicos*/

let usuario = "admin";
let fecha = new Date();

console.log(`El usuario ${usuario} inicio sesion el ${fecha}`);

/*usar condiciones dentro de template strings*/

let edad = 17;

let mensaje = `El usuario es ${edad >= 18 ? "mayor" : "menor"} de edad`;

console.log(mensaje);

/*usar loops dentro de template strings*/

let numeros = [1,2,3,4];

let resultado = `
Numeros: 
${numeros.map(n => `Numero: ${n}`).join("\n")}
`;

console.log(resultado);

/*tagged template literals*/

function etiqueta(strings, valor) {
    return `${strings[0]}${valor.toUpperCase()}${strings[1]}`;
} 

let nombre = "Juan";
let resultado = etiqueta`Hola${nombre}!`;

console.log(resultado);
