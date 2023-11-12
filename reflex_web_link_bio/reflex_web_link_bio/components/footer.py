import reflex as rx
import datetime

# Vamos a importar el Size generico
from reflex_web_link_bio.styles.styles import Size as Size


# 5️⃣ Guardando e importando el footer en index
def footer() -> rx.Component:
    return rx.vstack(
        # pintar imagenes o diferentes elemnetos
        rx.image(src="favicon.ico"),
        # Ahora quiero que ese texto sea un link y que me actualice el año importando la libreria date
        rx.link(
            f"© 2021-{datetime.date.today().year}. Publeonard1 By Leonardo Moreno v1.1",
            href="https//github.com/Publeonar1",
            is_external=True,
            font_size=Size.MEDIUN.value,
            # Toma al is_external para que me abra en otra pestaña
        ),
        rx.text(
            """IMAGINING AND CREATING A BETTER WORLD. FROM BOGOTÁ, MY CAPITAL CITY.""",
            font_size=Size.MEDIUN.value,
            marging_top="0px !important",
        ),
        margin_button=Size.BIG.value,
    )


# interpolando --> f"{}"
