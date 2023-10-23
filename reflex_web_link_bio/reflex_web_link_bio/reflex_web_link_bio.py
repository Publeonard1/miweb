import reflex as rx


class State(rx.State):
    pass


# La función es para crear la pág. inicial y nos tiene que devolver -> el componente rx y la es la parte gráfica
def index() -> rx.Component:
    rx.text("Hola Leo", color="rbg(45, 48, 18, 0.5)", font_size="2rem")
    return rx.button(  # Delver por pantalla el componente de botón
        "Hola Leonardo",
        border_radius="1em",
        box_shadow="rgba(151, 65, 252, 0.8) 0 15px 30px -10px",
        background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
        box_sizing="border-box",
        color="white",
        opacity="0.6",
        _hover={
            "opacity": 10,
        },
    )


rx.text("Hola Leo", color="rbg(45, 48, 18, 0.5)", font_size="2rem")

# Con la variable que se llama app, ejecutamos lo que tenemos de código para que lo muestre en pantalla
app = rx.App()  # de tipo rx.App
app.add_page(
    index
)  # Vamos a agregar con las var app la función add_page --> la funicón pag  y que nos la compile
app.compile()

# Mi primer código de línea con sus estilos y esto es un componente
# rx.text("Hola Leo", color="rbg(45, 48, 18, 0.5)", font_size="2")


rx.button(
    "Fancy Button",
    border_radius="1em",
    box_shadow="rgba(151, 65, 252, 0.8) 0 15px 30px -10px",
    background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
    box_sizing="border-box",
    color="white",
    opacity="0.6",
    _hover={
        "opacity": 3.5,
    },
)
