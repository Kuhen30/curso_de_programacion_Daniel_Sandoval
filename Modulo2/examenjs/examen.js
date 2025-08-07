//Ejercicio 1

const nombreProducto = "Tablet 10 pulgadas";
let precio = 200;
let stock = 25;
const envioGratis = true;


console.log("--- Perfil de Producto ---");
console.log("Nombre del producto:", nombreProducto);
console.log("Precio:", precio);
console.log("Cantidad en stock:", stock);
console.log("Envío gratis:", envioGratis);

//ejercicio 2 

const cantidadComprada = 20;
const impuesto = 0.07;

//operacion para calcular 
const subtotal = precio * cantidadComprada;
const totalFinal = subtotal * (1 + impuesto);

console.log("\n--- Total de Compra ---");
console.log("Subtotal:", subtotal);
console.log("Total (con 7% de impuesto):", totalFinal.toFixed(2));

//Ejercicio 3

let edadUsuario = 20;

console.log("\n--- Dime tu edad ---");
if (edadUsuario >= 18) {
    console.log("Puedes obtener tu licencia de conducir.");
} else {
    console.log(" No tienes la edad para obtener la licencia Vuelve cuando tengas la mayoria de edada.");
}

//Ejercicio 4

let colorSemaforo = "verde";

console.log("\n--- Sistema de Semáforo ---");
if (colorSemaforo === "verde") {
    console.log("Puede avanzar.");
} else if (colorSemaforo === "amarillo") {
    console.log("Reduzca la velocidad, precaución.");
} else if (colorSemaforo === "rojo") {
    console.log("Debe detenerse.");
} else {
    console.log("Color no válido.");
}


//Ejercicio 5

let diaSemana = 3;

console.log("\n--- Menú del Día ---");
switch (diaSemana) {
    case 1:
        console.log("Plato del día lunes: Lentejas");
        break;
    case 2:
        console.log("Plato del día martes: pollo a la plancha");
        break;
    case 3:
        console.log("Plato del día Miercoles: Pescado frito");
        break;
    case 4:
        console.log("Plato del dia Jueves: Hamburguersa");
        break;
    case 5:
        console.log("Plato del dia Viernes: Arepa frita");
        break;
    default:
        console.log("Día no válido para menú.");
}

//ejercicio 6

console.log("\n--- Números Pares del 2 al 20 ---");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//ejercicio 7

let contador = 10;

console.log("\n--- Cuenta Regresiva ---");
while (contador >= 1) {
    console.log(contador);
    contador--;
}
console.log("Despegue 🚀");


//Ejercicio 8

console.log("\n--- Reto FizzBuzz ---");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

//Ejercicio 9

let sumaTotal = 0;

for (let i = 1; i <= 100; i++) {
    sumaTotal += i;
}
console.log("\n--- Suma del 1 al 100 ---");
console.log("La suma total es:", sumaTotal);

//Ejercicio 10

//Opcion 1 acceso denegado
let edad = 19;
let tieneEntrada = false;

console.log("\n--- Acceso a Evento ---");
if (edad >= 18 && tieneEntrada) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}


// opcion 2 acceso concedido Tenemos que cambiar variable 
console.log("--- Probando el segundo caso ---");
tieneEntrada = true;
if (edad >= 18 && tieneEntrada) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}