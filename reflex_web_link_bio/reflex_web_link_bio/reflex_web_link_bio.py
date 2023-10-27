import reflex as rx
from reflex_web_link_bio.components.navbar import navbar
from reflex_web_link_bio.views.header.header import header
from reflex_web_link_bio.views.links.links import links

# from reflex_web_link_bio.views.header.encabezado import

# Quiero importa el componente narvar que hemos creado


class State(rx.State):
    pass


# La función es para crear la pág. inicial y nos tiene que devolver -> el componente rx y la es la parte gráfica
def index() -> rx.Component:
    # el .Hstack te ayuda a hacer componentes de forma horizontal
    return rx.vstack(
        navbar(),
        header(),
        links(),
    )

    # Ahora si yo quiero un grupo de narvar
    # retunr rx.vstsck(
    # vavbar()
    # vavbar()
    # vavbar()
    # vavbar()
    # ) Son un grupo de narbar pero de formar vertical


# L apropiedad stikhy va a estar fijo

# Con la variable que se llama app, ejecutamos lo que tenemos de código para que lo muestre en pantalla
app = rx.App()  # de tipo rx.App
app.add_page(
    index
)  # Vamos a agregar con las var app la función add_page --> la funicón pag  y que nos la compile
app.compile()

# Reflex funciona con componentes, Hoy vamos a crear la barra de nav.
