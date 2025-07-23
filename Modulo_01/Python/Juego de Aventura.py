"""Actividad : 🕹️ ¡Tarea de Programación Interactiva! 🧙‍♂️🐍
Vamos a crear un juego de aventuras basado en texto 🎮💬. 
Prepárate para desafiar tu creatividad y lógica en Python con esta actividad súper dinámica. 👨‍💻👩‍💻"""

# Aca empieza el codigo
print("Estás caminando por un bosque oscuro 🌲🌌 y encuentras dos objetos: un fósforo y una linterna. ¿Con cuál te quedas?")
opcion = input("Escribe 'fósforo' o 'linterna': ").lower()
# opciones de fosforo
while True:
    if opcion.upper() == "FÓSFORO" or opcion == "fosforo":
        print("Tomas el fósforo y lo enciendes 🔥. Por unos segundos, el bosque se ilumina... ¡y ves un gran oso grizzly! 🐻 El fósforo se apaga. Queda todo en oscuridad.")
        accion = input(
            "¿Quieres CORRER, ESCONDERTE detrás de un árbol 🌳 o LANZAR el fósforo al oso? 🐻 ").upper()
        if accion == "CORRER":
            print("Comienzas a correr desesperadamente por el bosque, pero el oso te alcanza. Logras escapar por los pelos y llegas a una carretera segura donde se encuentran los guardabosques. ¡Bien hecho!")
            break
        elif accion == "ESCONDERTE":
            print("Te escondes rápidamente detrás de un árbol. El oso pasa de largo sin notarte. ¡Logras escapar y llegar a una cabaña en el claro del bosque!")
            break
        elif accion == "LANZAR":
            print("Lanzas el fósforo encendido al oso, pero este se enfurece y te ataca... 😨 Mueres. El juego se reinicia.")
            opcion = "fósforo"
            continue
        else:
            print("Opción no válida. Intenta de nuevo.")
# opciones de linterna
    elif opcion == "linterna":
        print("Enciendes la linterna 💡 y ves un camino iluminado. De pronto, oyes algo entre los árboles 🌿. ¿Qué puede ser eso?")
        accion = input(
            "¿Quieres SEGUIR el camino como una persona inteligente 🤓, BUSCAR entre los árboles 🌿 lo que hizo el ruido o APAGAR la linterna? 🔦 ").upper()
        if accion == "SEGUIR":
            print("Sigues el camino 🚶🏽‍♂️ y llegas a una cabaña. Dentro encuentras comida 🌮, un mapa 📖 y un teléfono 📱 para llamar a los servicios de rescate. ¡Logras salir del bosque a salvo! 🎇🎉✨")
            break
        elif accion == "BUSCAR":
            print("Te adentras en los árboles y descubres una cueva. Decides explorarla y en eso te pierdes y no consigues una salida. De pronto aparece el oso 🐻 y visitas a san pedro... 😞")
            print("Vuelves al inicio. Mueres a causa de un gran abrazo del oso.")
            opcion = "linterna"
            continue
        elif accion == "APAGAR":
            print("Apagas la linterna 🔦 y todo se vuelve oscuridad. Escuchas pasos acercándose... ¡Algo se acerca!")
            accion2 = input(
                "¿Quieres ENCENDER la linterna de nuevo o PERMANECER en silencio? ").upper()
            if accion2 == "ENCENDER":
                print("Enciendes la linterna y ves a un ciervo que te mira sorprendido. Puedes seguir tu camino y llegar a una carretera segura.")
                break
            elif accion2 == "PERMANECER":
                print("Te quedas en silencio y escuchas cómo el animal se aleja. Logras pasar desapercibido y encontrar la salida del bosque.")
                break
            else:
                print("Opción no válida. Intenta de nuevo.")
        else:
            print("Opción no válida. Intenta de nuevo.")
    else:
        print("Opción no válida. Intenta de nuevo.")
        opcion = input("Escribe 'fósforo' o 'linterna': ").lower()
        continue
# aca es el mensaje del que el juego termino
print("¡Felicidades, has logrado salir del bosque a salvo! Tu aventura ha llegado a su fin. ¡Gracias por jugar!")
# aca pregunta el sistema si quiere volver a jugar
while True:
    jugar_de_nuevo = input("¿Quieres jugar de nuevo? (sí/no) ").lower()
    if jugar_de_nuevo == "sí":
        print("Iniciando el juego de nuevo...")
        opcion = input("Escribe 'fósforo' o 'linterna': ").lower()
        continue
    elif jugar_de_nuevo == "no":
        print("¡Hasta la próxima!")
        break
    else:
        print("Opción no válida. Intenta de nuevo.")
