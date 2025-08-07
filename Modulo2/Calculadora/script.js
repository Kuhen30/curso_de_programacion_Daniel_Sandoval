let display = document.getElementById("display");
//Almacena la expresion matematica
let currentInput = "";

// Convertir grados a radianes
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Añade un valor al input
function append(value) {
    // Evitar múltiples puntos en un mismo número
    if (value === '.') {
        const parts = currentInput.split(/[\+\-\*\/\(\)]/);
        if (parts[parts.length - 1].includes('.')) return;
    }

    // Potencia
    if (value === '^') {
        currentInput += '**';
    }
    // Funciones especiales
    else if (value === '√(') {
        currentInput += 'Math.sqrt(';
    }
    else if (value === 'cos(') {
        currentInput += 'Math.cos(toRadians(';
    }
    else if (value === 'tan(') {
        currentInput += 'Math.tan(toRadians(';
    }
    // Paréntesis o cualquier otro valor
    else {
        currentInput += value;
    }

    updateDisplay();
}

// Limpiar todo en la pantalla
function clearAll() {
    currentInput = "";
    updateDisplay("0");
}

// Eliminar el último carácter o función
function deleteChar() {
    const patterns = [
        { text: 'Math.cos(toRadians(', length: 20 },
        { text: 'Math.tan(toRadians(', length: 20 },
        { text: 'Math.sqrt(', length: 10 },
        { text: '**', length: 2 }
    ];

    for (let pattern of patterns) {
        if (currentInput.endsWith(pattern.text)) {
            currentInput = currentInput.slice(0, -pattern.length);
            updateDisplay();
            return;
        }
    }

    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Calcular el resultado
function calculate() {
    try {
        let expression = currentInput;

        // Asegurar que todos los paréntesis estén cerrados y si el ususario se olvido de colocar uno lo coloca el mismo sistema
        const openParens = (expression.match(/\(/g) || []).length;
        const closeParens = (expression.match(/\)/g) || []).length;
        const missingParens = openParens - closeParens;
        if (missingParens > 0) {
            expression += ')'.repeat(missingParens);
        }

        // Reemplazar toRadians(...) por su equivalente
        expression = expression.replace(/toRadians\(([^()]+)\)/g, (_, deg) => {
            return '(' + deg + ' * (Math.PI / 180))';
        });

        const result = new Function('return ' + expression)();

        if (!isFinite(result)) {
            updateDisplay("Error");
            currentInput = "";
            return;
        }

        currentInput = result.toString();
        updateDisplay();
        //Si hay algun error muestra un mensaje y reinicia
    } catch (error) {
        console.error("Error en el cálculo:", error);
        updateDisplay("Error de Sintaxis");
        currentInput = "";
    }
}

// Actualizar la pantalla
function updateDisplay(content = currentInput) {
    if (content === "") {
        display.textContent = "0";
    } else {
        const displayContent = content
            .replace(/Math\.cos\(toRadians\(/g, 'cos(')
            .replace(/Math\.tan\(toRadians\(/g, 'tan(')
            .replace(/Math\.sqrt\(/g, '√(')
            .replace(/\*\*/g, '^');
        display.textContent = displayContent;
    }
}

// Soporte para teclado
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
        append(key);
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key.toLowerCase() === 'c' || key === 'Escape') {
        clearAll();
    } else if (key === '^') {
        append('^');
    }
});