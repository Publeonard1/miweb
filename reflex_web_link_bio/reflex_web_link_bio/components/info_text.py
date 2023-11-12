import reflex as rx
from reflex_web_link_bio.styles.styles import Size as Size

# 9️⃣ Creando nuevo fichero como componente para crear un la info escrita con texto pero estaá vez como contenedor
# y que sea flexible


def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(title, font_weight="bold", color="blue"),
        f" {body}",  # Esto es para que no quede pegado el texto
        font_size=Size.MEDIUN.value,
    )


# 9️⃣🅰 Vamos a importar este fichero dentro del fichero de vista header
