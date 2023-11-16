import reflex as rx
from enum import Enum  # librería de python

# 🔟🅰 Importamos y edutadmos el backgraundo que tenemos desde el fichero colors para der 
from .colors import Color as Color

# 🔟🆎 Importantando bloque de edición de botones para cambiar los botones como la edicón TextColor()
from .colors import TextColor as TextColor

# Aqui podemos empaquetar todos los estilos de mi aplicación

# CONSTANTS
MAX_WIDTH = "560px"  # lO COLOCAMOS COMO UNA COSTANTE A MI VARIABLE DE ESTILOS Y
# 6️⃣  Y quiero importar mis estilos directamente con index para quitar los estilos que tengo desde mi index
# Esto simple y llanamente para editar los estilos desde el principio


# MARGENES SIZES
class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"  # Equivale a 8px
    MEDIUN = "0.8em"
    DEFAULT = "1em"  # --> 16px
    BIG = "2em"  # --> 32px


# Ya no se utiliza px sino em como tamaño de fuente de mi aplicación

# Estilo general de botones como dicionario
BASE_STYLE = {
    "background_color": Color.BACKGROUND.value,
    # 🔟🅰 con la edición del backgraund io 
    # Mapa de propiedades para el botón
    rx.Button: {
        "width": "100%",  # Que me ocupe el 100% de ese contenedor
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.SMALL.value,
        # 🔟🅱 Agregando nueva edición a al texto y color de los botones
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "_hover": {
            "background_color": Color.SECUNDARY.value,
        },
    },
    rx.Link: {"text_decoration": "done", "_hover": {}},
}

# 7️⃣🅰Estilos del título del bloque de botones 7️⃣🅱
title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)

# Estilo del título del botón
button_tittle_style = dict(
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value,  # 🔟🅱 Modificando el color del texto en el n 
)

# Estilo texto cuerpo
button_body_style = dict(
    font_size=Size.MEDIUN.value,
    color=TextColor.BODY.value,  # 🔟🅱 Modificando el color del texto en el botón
)
