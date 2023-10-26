import reflex as rx


# Vamos a hacer una función que nos muestre el encabezado de la página y que este de forma vertical
def header() -> rx.Component:
    return rx.vstack(  # Esto me pone de forma vertical el encabezado
        # Avatar desde reflex
        rx.avatar(size="sm"),
        # Tittle name
        rx.text("¡Hola! 👋🏻. Soy Leonardo Moreno Cubides"),
        rx.text(
            """ 👩🏻‍🔧Soy Ingeniero Mecánico y 👩🏻‍💻diseñador mecánico de detalle con experiencia en el sector y quiero automatizar los procesos mecánicos que tiene la industria
                 y el sector automotor con las nuevas tecnologías.  """
        ),
    )


# Y luego se importa en nuestra web principal
#3️⃣ Para hacer la barra de botones con links hacemos otra carpeta en views una llamada links y se crea el fichero 
# llamado links.py
