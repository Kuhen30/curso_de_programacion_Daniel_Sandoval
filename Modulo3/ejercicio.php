<?php
$nombre = "Daniel Sandoval";

$edad = 20;

$descrip = "Un estudiante de computacion que le gustan las chicas pequeñas";

echo "Informacion:\n"($nombre);($edad); ($descrip);
echo "\n----------------------------------------\n\n";
?>

 Contador de Pares e Impares
🔢 Escribe un script que cuente y muestre la cantidad de números pares e impares que hay en el rango del 1 al 50.

------------------------------------------------------------

2️⃣ Tabla de Multiplicar del 8
✖️ Crea un script que genere y muestre en la terminal la tabla de multiplicar completa del número 8, desde el 8×1 hasta el 8×10.

ejercicio 1
<?php
$numeros_pares= [];
$numeros_impares= [];
for ($i= 1; $i <= 50; $i++){
    if  ($i  % 2 == 0){
        $numeros_pares[]= $i;
    } else {
        $numeros_impares[] = $i;
    }
}
echo "Numeros pares del 1 al 50:\n"; 
foreach ($numeros_pares as $par) {
    echo $par . " ";
}
echo "\n\nCantidad de numeros pares¨: " .count($numeros_pares)."\n";
echo "\nNumeros impares del 1 al 50\n";
 foreach ($numeros_impares as $impar){
     echo $impar. " ";
 }
?>

ejercicio 2


<?php
echo "## 1. Ejemplo de bucle for (Tabla del 8) ##\n";

// Este bucle se ejecutará 10 veces.
// 1. Inicialización: $i = 1 (el contador empieza en 1)
// 2. Condición: $i <= 10 (el bucle continúa mientras $i sea menor o igual a 10)
// 3. Incremento: $i++ (en cada vuelta, se suma 1 a $i)
for ($i = 1; $i <= 10; $i++) {
    echo "8 x " . $i . " = " . (8 * $i) . "\n";
}
echo "\n";
?>

 ejercicio 3Juego: Adivina el Número
🎯 Desarrolla un programa que simule un juego de "adivina el número". Define una variable con un número secreto y utiliza un bucle while para intentar adivinarlo, incrementando un contador hasta encontrarlo. Muestra cada intento.
<?php
$nombre = readline("Cual es tu nombre:");
echo "Hola, $nombre\n";

$numero_secreto = (int)readline("Ingresa El numero que quieres que adivine:");
echo "empezando a buscar\n";

$intento = 0;
$contador = 0;

while ($intento != $numero_secreto) {
    $contador++;
    echo "intento $contador:probando con $intento\n";
    $intento++;
}
echo "\n Numero encontrado $nombre era $numero_secreto.\n";
echo "Total de intentos: $contador\n";
?>

ejercicio 4 Suma de Impares del 1 al 100
➕ Escribe un script que calcule la suma de todos los números impares desde el 1 hasta el 100.
<?php
$suma= 0;

for($i = 1; $i <=100; $i +=2) {
    suma += $i;
}
echo "suma de numeros impares del 1 al 100 es:$suma\n";
?>
ejercicio 5 Verificación para Licencia de Conducir
🚗 Crea un programa que verifique si una persona puede obtener una licencia de conducir. La condición es que debe tener al menos 18 años y no más de 65 años. Define una variable para la edad y muestra si cumple los requisitos o no.

<?php
$edad = (int)readline("Ingresa tu edad: ");
if ($edad>=18 && $edad <=65) {
    echo "Puedes optiner tu licencia\n";
} elseif ($edad < 18){
    echo "Perdon no puede conseguir una licencia\n";
}else{
    echo  "perdon no puede conseguir una licencia\n";
}
?>

ejercicio 6 Utilizando bucles anidados, crea un script que dibuje un cuadrado de 5×5 en la terminal utilizando el carácter #.

<?php
$size = 5;

for ($i = 0; $i < $size; $i++) {
    for ($j = 0; $j < $size; $j++) {
        echo "# ";
    }
    echo PHP_EOL; 
}
?>

ejercicio 7  Clasificación de un Número
➖➕ Desarrolla un script que determine si un número almacenado en una variable es positivo, negativo o cero, y muestre el resultado correspondiente.

<?php
$numero = -99;

if ($numero > 0) {
    echo "El numero es positivo.";
} elseif ($numero < 0) {
    echo "El numero es negativo.";
} else {
    echo "El numero es cero.";
}
?>

ejercicio 8 

<?php
for ($i = 1; $i <= 30; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "MarTierra\n";
    } elseif ($i % 3 == 0) {
        echo "Mar\n";
    } elseif ($i % 5 == 0) {
        echo "Tierra\n";
    } else {
        echo $i . "\n";
    }
}
?>

ejercicio 9

<?php
$temperatura = 12;

if ($temperatura < 10) {
    echo "❄ Frrio";
} elseif ($temperatura >= 10 && $temperatura <= 25) {
    echo "️ Templado";
} else {
    echo " Caluroso";
}
?>

ejercicio 10

<?php
for ($i = 10; $i >= 1; $i--) {
    echo $i . "\n";
    sleep(1); // Pausa de 1 segundo entre cada número (opcional en terminal)
}

echo "🎆 ¡Feliz Año Nuevo!\n";
?>
