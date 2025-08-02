//ejercicio 1
let nombre ="Daniel";
let edad = 20;
let Esestudiante = true;

console.log("Nombre", nombre);
console.log("Edad", edad);
console.log("Estudiante", Esestudiante);

//ejercicio 2 

let nombreUsuario = prompt("Cual es su nombre:");
let añordenacimiento =prompt ("En que año nacio usted ");
let UnunNacimiento = Number("nacimiento");
let edadaproxi = 2025 - fecha.aproxi;

console.log("Hola," + nombreUsuario + ",Tienes mas o menos " + edadaproxi  + "años.");

//ejercicio 3

let numero1= Number(prompt("Ingresa el primer numero Numero"));
let numero2= Number(prompt("Ingresa  el Segundo Numero"));

console.log("", );
console.log("", );
console.log("")

//Segunda tabla de ejercicio
//verificar edad 
let años = prompt("Ingrese su edad:");

if (años >= 18) {
    console.log ("Es mayor de edad");
} else{
    console.log ("Es menor de edad");
}

//comparar numeros

let numero1 = parseFloat(prompt("Ingresa el primer numero"));
let numero2 = parseFloat(prompt("Ingresa el primer numero"));


//  

let Diasemana = parseInt (prompt("ingresa numero del 1 al 7: "));

switch (Diasemana){
      case 1:
    console.log ("Lunes");
    break; 
    case 2:
        console.log ("Martes");
    break
    case 3:
        console.log ("Miercoles");
        break;
    case 4:
        console.log ("Juevez");
        break;
    case 5:
        console.log ("Viernes");
        break
    case 6:
        console.log("Sabado");
    case 7:
        console.log("DoMINGO");
}

//Menu de juego

let opcionMenu= prompt("Que quieres hacer INICIAR, GUARDAR, SALIR.:").toUpperCase();
switch (opcionMenu) {
    case "INICIAR":
        console.log("Preparate para la aventura toma tu escudo y espada.");
        break;
    case "GUARDAR":
        console.log("Claro guardemos partida antes de un bajon");
        break;
    case "SALIR":
        console.log("Que cobarde no quieres seguir.");
        break;
    default: // Se ejecuta si ninguno de los casos anteriores coincide.
        console.log("Que intentas hacer loquito .");
        break;
}


//tabla de multiplicar

let numero = parseInt(prompt("Ingresa un número ver su tabla d multiplicar:"));

for (let i = 1;  i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}

//Cuenta Regresiva

let Contador = 10; 
let despeque = 0;
const contador2 = 1;

console.log("\n--- Simulación de Descarga ---");
while (Contador< despeque) {
    // El bucle se ejecuta mientras lo descargado sea menor que el tamaño total.
    console.log(`Despegando ${despeque} de ${Contador} seg.`);
    despeque += contador2; // Aumentamos la cantidad descargada

    if (despeque > tamanoArchivo) {
        descargado = tamanoArchivo; // Para no mostrar más de 100MB descargados
    }
}

console.log(`Descargando... ${descargado} de ${tamanoArchivo} MB.`);
console.log("¡Descarga completada!");