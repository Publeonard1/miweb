import reflex as rx
from enum import Enum  # librería de python


# Aqui podemos empaquetar todos los estilos de mi aplicación

# CONSTANTS
MAX_WIDTH = "560px"  # lO COLOCAMOS COMO UNA COSTANTE A MI VARIABLE DE ESTILOS Y
# 6️⃣  Y quiero importar mis estilos directamente con index para quitar los estilos que tengo desde mi index
# Esto simple y llanamente para editar los estilos desde el principio


# MARGENES SIZES
class Size(Enum):
    SMALL = "0.5em"  # Equivale a 8px
    MEDIUN = "0.8em"
    DEFAULT = "1em"  # --> 16px
    BIG = "2em"  # --> 32px


# Ya no se utiliza px sino em como tamaño de fuente de mi aplicación

# Estilo general de botones como dicionario
BASE_STYLES = {
    # Mapa de propiedades para el botón
    rx.Button: {
        "width": "100%",  # Que me ocupe el 100% de ese contenedor
        "height": "100px",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.SMALL.value,
    },
    rx.Link: {"text_decoration": "done", "_hover": {}},
}

# Estilo del título del botón
button_tittle_style = dict(
    font_size=Size.DEFAULT.value,
)

# Estilo texto cuerpo
button_body_style = dict(font_size=Size.MEDIUN.value)
