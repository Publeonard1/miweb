import reflex as rx

# Importamos los styles
import reflex_web_link_bio.styles.styles as styles


# 7️⃣ Hacemos un nuevo componente como fichero en de la carpeta de components y creamos este para darle
# el título al bloque de botones
def title(text: str) -> rx.Component:
    return rx.heading(
        text,
        # 7️⃣🅰Ahora yo quiero agregar estos estilos y editarlos directamente en el fichero de estilos
        # size="lg",
        # width="100%",
        size="md",
        style=styles.title_style,  # 7️⃣🅱 Edita y para importando los estilos del titulo para el bloque de botones
    )
    # 7️⃣🅾 Ahora con esto importamos este componente dentro del fichero de links.py
