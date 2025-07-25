# 1. Crear un diccionario de estudiante

estudiante = {
    "nombre": "Daniel",
    "edad": 20,
    "carrera": "Ingeniería"
}

# Imprime el valor de "carrera"
print(estudiante["carrera"])

print("\n")
print("Actividad numero 2")
# 2. Contar frecuencia  de letras

# Dada una palabra
# palabra = "banana"
# Crea un diccionario que cuente cuántas veces aparece cada letra
# Resultado esperado: {'b': 1, 'a': 3, 'n': 2}

palabra = "banana"
frecuencia = {}

for letra in palabra:
    if letra in frecuencia:
        frecuencia[letra] += 1
    else:
        frecuencia[letra] = 1

print(frecuencia)

print("\n")
print("Actividad Numero 3")

# 3. Actualizar valores

# Dado el diccionario
precios = {"manzana": 0.5, "Banana": 0.3}

# Cambia el precio de la banana a 0.4
precios["Banana"] = 0.4

print(precios)


print("\n")
print("Actividad numero 4")

# 4. Iterar sobre claves y valores
# Dado el diccionario
capitales = {"Francia": "París", "Italia": "Roma", "España": "Madrid"}

# Imprime cada país y su capital en formato: "La capital de [país] es [capital]"
for pais, capital in capitales.items():
    print(f"La capital de {pais} es {capital}")
