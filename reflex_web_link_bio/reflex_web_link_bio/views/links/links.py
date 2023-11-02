import reflex as rx

# 4️⃣🅰 Impotando el fichero de link_button y hacer el boton como un link
from reflex_web_link_bio.components.link_button import link_button


# 3️⃣Se crea el componente de links quee pueden ser textos o imagenes donde me van a conducir a otras vistas o páginas
def links() -> rx.Component:
    return rx.vstack(
        # rx.button("Twitch", color="white", background_color="purple", padding_x="100px") => Esto era cuanod el boton era simple
        # llamando función componente
        link_button("Twitch", "https://twitch.tv/publeonardo1"),
        link_button("Github - Repositorio", "https://github.com/Publeonard1"),
        link_button(
            "YouTube - Canal oficial de Leonardo", "https://youtube.com/leonardo1mc"
        ),
        link_button(
            "Discord",
            "https://https://discord.com/channels/729672926432985098/1004479046207410366",
        ),
        width="100%",  # Me ocupa todo el espacio que tengo con el cuadro de descripción
    )


# Y queremos pintar botones pues vamos a la documentación de reflex
# 4️⃣ Ahora yo quiero hacer que ese botón sea especial y puedo crearlo como un componente especifico de la app
# Creando que ese botón se vuelva un link_button como nuevo fichero o doc dentro de components
