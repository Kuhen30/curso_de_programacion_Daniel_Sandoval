#include <iostream>
using namespace std;

int main() {
    
    cout << "Hola, Mundo" << endl;

    int numeroEntero = 42;
    float numeroFlotante = 3.14f;
    char caracter = 'A';
    bool esVerdadero = true;

    cout << "Entero: " << numeroEntero << endl;
    cout << "Flotante: " << numeroFlotante << endl;
    cout << "Carácter: " << caracter << endl;
    cout << "Booleano: " << esVerdadero << endl;

    return 0;
}



ejercicio 2

#include <iostream>
#include <cmath> // Para usar pow() y sqrt()

using namespace std;

int main() {
    // Declaración de variables
    double num1, num2;

    // Solicitar entrada al usuario
    cout << "Ingrese el primer número: ";
    cin >> num1;

    cout << "Ingrese el segundo número: ";
    cin >> num2;

    // Operaciones básicas
    cout << "\n--- Operaciones Básicas ---" << endl;
    cout << "Suma: " << num1 + num2 << endl;
    cout << "Resta: " << num1 - num2 << endl;
    cout << "Multiplicación: " << num1 * num2 << endl;

    // Verificar división por cero
    if (num2 != 0) {
        cout << "División: " << num1 / num2 << endl;
    } else {
        cout << "División: Error - No se puede dividir entre cero." << endl;
    }

    // Operaciones con <cmath>
    cout << "\n--- Operaciones con <cmath> ---" << endl;
    cout << "Potencia (" << num1 << "^" << num2 << "): " << pow(num1, num2) << endl;

    if (num1 >= 0) {
        cout << "Raíz cuadrada de " << num1 << ": " << sqrt(num1) << endl;
    } else {
        cout << "Raíz cuadrada: Error - No se puede calcular la raíz de un número negativo." << endl;
    }

    return 0;
}


Ejercicio 3: Condicionales if-else
Desarrolla un programa que pida al usuario su edad. El programa debe utilizar una estructura condicional if-else para determinar si el usuario es mayor de edad (18 años o más) y mostrar un mensaje apropiado en la pantalla.

📚 Temas: Condicionales, Operadores, Variables.

#include <iostream>

int main() {
    int edad;
    std::cout << "Introduce tu edad: ";
    std::cin >> edad;

    // El programa evaluará las condiciones en orden.
    if (edad < 18) {
        // Este bloque se ejecuta si la edad es menor a 18.
        std::cout << "Eres menor de edad." << std::endl;
    } else if (edad >= 18 && edad <= 65) {
        // Si no es menor de 18, comprueba si está entre 18 y 65.
        // '&&' es el operador Y lógico (ambas condiciones deben ser ciertas).
        std::cout << "Eres un adulto." << std::endl;
    } else {
        // Si ninguna de las anteriores es cierta (mayor de 65).
        std::cout << "Eres un adulto mayor." << std::endl;
    }

    return 0;

    }
11
🔁 Ejercicio 4: Bucle for y Constantes con #define
Utiliza #define para crear una constante simbólica llamada LIMITE con un valor de 10. Luego, escribe un programa que pida al usuario un número y utilice un bucle for para imprimir la tabla de multiplicar de ese número desde 1 hasta LIMITE.

📚 Temas: Bucle for, #define, iostream.
