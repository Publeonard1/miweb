import reflex as rx


class State(rx.State):
    pass


# La función es para crear la pág. inicial y nos tiene que devolver -> el componente rx y la es la parte gráfica
def index() -> rx.Component:
    # el .Hstack te ayuda a hacer componentes de forma horizontal
    rx.Hstack(
        # El componente es un hijo como texto
        rx.text(
            "Publeonard",
            height="40px",
        ),
    )


# Con la variable que se llama app, ejecutamos lo que tenemos de código para que lo muestre en pantalla
app = rx.App()  # de tipo rx.App
app.add_page(
    index
)  # Vamos a agregar con las var app la función add_page --> la funicón pag  y que nos la compile
app.compile()

# Reflex funciona con componentes, Hoy vamos a crear la barra de nav.
