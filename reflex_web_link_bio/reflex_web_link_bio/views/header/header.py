import reflex as rx

from reflex_web_link_bio.styles.styles import Size as Size

# 8️⃣🅱 importante el fichero link_icon.py
from reflex_web_link_bio.components.link_icon import link_icon


# Vamos a hacer una función que nos muestre el encabezado de la página y que este de forma vertical
def header() -> rx.Component:
    return rx.vstack(  # Esto me pone de forma vertical el encabezado
        rx.hstack(
            # Avatar desde reflex
            rx.avatar(
                name="Publio Leonardo Moreno Cubides ",
                size="lg",
                font_family="system-ui",
            ),
            # Tittle name
            rx.vstack(
                rx.heading(
                    "Leonardo Moreno",
                    size="md",
                ),
                rx.text(
                    "@Publeonard1",
                    marging_top="0px !important",  # Este es unn margen
                ),
                rx.hstack(
                    # 8️⃣🆎 pasamos el link de la dirección de la pág, que queremos conducir
                    link_icon("https//x.com/LeonardoMorCub"),
                    link_icon("https//x.com/LeonardoMorCub"),
                    link_icon("https//x.com/LeonardoMorCub"),
                ),
                aling_items="start",
            ),
        ),
        rx.text(
            """ 👩🏻‍🔧Soy Ingeniero Mecánico y 👩🏻‍💻diseñador mecánico de detalle con experiencia en el sector y quiero automatizar los procesos mecánicos que tiene la industria
                 y el sector automotor con las nuevas tecnologías.  """
        ),
        spacing=Size.BIG.value,
        font_family="system-ui",
        aling_items="start",
    )


# Y luego se importa en nuestra web principal
# 3️⃣ Para hacer la barra de botones con links hacemos otra carpeta en views una llamada links y se crea el fichero
# llamado links.py
