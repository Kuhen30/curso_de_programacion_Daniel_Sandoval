# Ejercicio combinado: Alumnos y sus materias

# Dado el diccionario
alumnos = {
    "Luis": {"Matemáticas", "Historia", "Biología"},
    "Ana": {"Matemáticas", "Física", "Química"},
    "Carlos": {"Historia", "Arte", "Biología"},
}
# 1. Mostrar todas las materias únicas que cursan los alumnos (sin repetir)
materias_unicas = set()
for materias in alumnos.values():
    materias_unicas.update(materias)
print("Materias únicas:")
print(materias_unicas)

# 2. Encontrar las materias comunes entre Luis y Ana
materias_comunes = alumnos["Luis"].intersection(alumnos["Ana"])
print("\nMaterias comunes entre Luis y Ana:")
print(materias_comunes)

# 3. Agregar una nueva materia a Carlos: "Física"
alumnos["Carlos"].add("Física")
print("\nMaterias de Carlos después de agregar Física:")
print(alumnos["Carlos"])

# 4. Eliminar la materia "Arte" de Carlos, si existe
if "Arte" in alumnos["Carlos"]:
    alumnos["Carlos"].discard("Arte")
print("\nMaterias de Carlos después de eliminar Arte:")
print(alumnos["Carlos"])

# 5. Imprimir el nombre de cada alumno y cuántas materias cursa
for alumno, materias in alumnos.items():
    print(f"\nEl alumno {alumno} cursa {len(materias)} materias.")

print("\n")
print("Gracias por ver mi codigo ")
