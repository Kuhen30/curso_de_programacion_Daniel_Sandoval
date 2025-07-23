# Lista de productos En el sistema
productos = {
    "harina": 2.50,
    "aceite": 4.75,
    "mantequilla": 3.25,
    "papel": 1.99,
    "desodorante": 2.99,
    "queso": 5.50,
    "refresco": 1.75,
    "pan": 0.75
}

# funcion donde agregamos elementos a la lista


def agregar_elemento():
    print("Productos disponibles:")
    for producto, precio in productos.items():
        print(f"{producto.capitalize()} - ${precio:.2f}")
# aquie  pide el sistema el nombre del articulo a agregar a la lista

    elemento = input(
        "Ingresa el nombre del elemento que deseas agregar: ").lower()
    if elemento in productos:
        cesta.append(elemento)
        print(f"¡{elemento.capitalize()} ha sido agregado a la cesta!")
    else:
        print("Ese producto no está disponible. Intenta de nuevo.")

# Quie el sistema muestra si la cesta esta vacio o el contenido que  esta en ella


def mostrar_cesta():
    if len(cesta) == 0:
        print("La cesta de la compra está vacía.")
    else:
        print("Contenido de la cesta de la compra:")
        for i, item in enumerate(cesta, 1):
            print(f"{i}. {item.capitalize()} - ${productos[item]:.2f}")

# Función para eliminar un elemento de la cesta


def eliminar_elemento():
    mostrar_cesta()
    if len(cesta) > 0:
        elemento_a_eliminar = int(
            input("Ingresa el número del elemento que deseas eliminar: "))
        if 1 <= elemento_a_eliminar <= len(cesta):
            elemento = cesta.pop(elemento_a_eliminar - 1)
            print(f"¡{elemento.capitalize()} ha sido eliminado de la cesta!")
        else:
            print("Número de elemento inválido. Intenta de nuevo.")

# Función para calcular el total de la compra


def calcular_total():
    total = 0
    for item in cesta:
        total += productos[item]
    print(f"El total de la compra es: ${total:.2f}")

# Opciones y funcionamento del prgrama


def run_programa():
    while True:
        print("\n--- Simulador de Cesta de Compra ---")
        print("Selecciona una opción:")
        print("1. Agregar un nuevo elemento")
        print("2. Mostrar el contenido de la cesta")
        print("3. Eliminar un Producto")
        print("4. Calcular el total de la compra ")
        print("5. Renunciar")

        opcion = input("Ingresa el número de la opción que quiera realizar: ")
# funcion que toma el numero que el usuario tomo
        if opcion == "1":
            agregar_elemento()
        elif opcion == "2":
            mostrar_cesta()
        elif opcion == "3":
            eliminar_elemento()
        elif opcion == "4":
            calcular_total()
        elif opcion == "5":
            print("¡Hasta la próxima!")
            break
        else:
            print("Opción inválida. Intenta de nuevo.")


# Inicializar la cesta de la compra
cesta = []

# Ejecutar el programa
run_programa()
