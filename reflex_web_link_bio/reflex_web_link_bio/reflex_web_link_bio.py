import reflex as rx

# Components
from reflex_web_link_bio.components.navbar import navbar
from reflex_web_link_bio.views.header.header import header
from reflex_web_link_bio.views.links.links import links
from reflex_web_link_bio.components.footer import footer

# Importación de styles
import reflex_web_link_bio.styles.styles as styles
from reflex_web_link_bio.styles.styles import Size as Size

# from reflex_web_link_bio.views.header.encabezado import

# Quiero importa el componente narvar que hemos creado


class State(rx.State):
    pass


# La función es para crear la pág. inicial y nos tiene que devolver -> el componente rx y la es la parte gráfica
def index() -> rx.Component:
    # el .Hstack te ayuda a hacer componentes de forma horizontal
    return rx.box(
        navbar(),  # Dejamos dentro de los elementos que son centrados
        # Para que solo se rejan por los estilos que le vamos a dar a narbar y a al footer
        rx.center(
            rx.vstack(
                header(),
                links(),
                color_text="Black",
                max_width=styles.MAX_WIDTH,  # se reemplaza el stylo que se tiene y se viene con el estilo desde el fichero style
                width="100%",  # Que me muestre el 100% paraque me muestre
                margin_y=styles.Size.BIG.value,  # Un componente que dejamos como margen hacía afuera y el padding es lo que damos hacía dentro
                padding=Size.BIG.value,  # 🔟🆎 para earreglar margen hacía dentro
            ),
        ),
        footer(),
    )
    # Ahora si yo quiero un grupo de narvar
    # retunr rx.vstsck(
    # vavbar()
    # vavbar()
    # vavbar()
    # vavbar()
    # ) Son un grupo de narbar pero de formar vertical


# Box: Agrupa los componentes
# L apropiedad stikhy va a estar fijo

# Con la variable que se llama app, ejecutamos lo que tenemos de código para que lo muestre en pantalla
app = rx.App(
    style=styles.BASE_STYLE  # Esto de golpe me estila todos los botones la app
)  # de tipo rx.App
app.add_page(
    index
)  # Vamos a agregar con las var app la función add_page --> la funicón pag  y que nos la compile
app.compile()

# Reflex funciona con componentes, Hoy vamos a crear la barra de nav.

# Investigar que son los componenetes de Layout o diseño, gu
