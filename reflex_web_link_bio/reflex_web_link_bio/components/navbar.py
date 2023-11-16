import reflex as rx
from reflex_web_link_bio.styles.styles import Size as Size

# 🔟🅱 Importamos el textColor desde colors.py
from reflex_web_link_bio.styles.colors import Color as Color

# 🔟🆎 Importamos la propiedad styles
import reflex_web_link_bio.styles.styles as styles


# Como hacemos un componente con una funicón
def navbar() -> rx.Component:  # Copio el componente que se hizo prviamente
    return rx.hstack(  # Si o si tiene que tener un return para que nos muestre en pantalla lo que se ha hecho
        rx.box(
            rx.span(
                "Pub",
                color=Color.PRIMARY.value,  # Fracciona y modifica con distito color el nombre 🔟🅱
            ),
            rx.span(
                "leonard",
                color=Color.SECUNDARY.value,
            ),
            style=styles.navbar_title_style,
        ),
        rx.text(
            "Publeonard",  # Nombre
        ),
        position="stichy",
        bg=Color.CONTENT.value,  # Color de la barra # 🔟🅱
        padding_x=Size.DEFAULT.value,  # Nos indica marcar espacios hacía afuera
        padding_y=Size.SMALL.value,  # Que va estar simepre en la parte superior
        z_index="999",
        top="0",
    )


# Hemos creado nuestro primer componente pero antes hay que importarlo
