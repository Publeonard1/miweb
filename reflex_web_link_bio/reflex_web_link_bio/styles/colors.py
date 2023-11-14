from enum import Enum

# 🔟Importamos un Enum para definir los tamaños SMALL, MEDIUM, ETC. Pero en este caso voy a definir los colores a las vistas


class Color(Enum):
    PRIMARY = "#14A1F0"
    SECUNDARY = "#3300CC"
    BACKGROUND = "#000033"  # fondo de la vista
    CONTENT = "#171F26"  # "#171F26"


# 🔟🅰 Con esto editamos el background ya edutado a style y dejarlo como estad


# COLORES PARA LOS TEXTOS
class TextColor(Enum):
    HEADER = "#F1F2F4"  # Blanco  HEADER = "#F1F2F4"
    BODY = "#C3C7CB"  # Gris
    FOOTER = "#A3ABB2"  # Gris oscuro


# 🔟🆎 Ahora para importar el bloque de edición de colores para los botones, losa 
# función TextColor()
