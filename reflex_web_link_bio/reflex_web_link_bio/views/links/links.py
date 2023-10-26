import reflex as rx


# 3️⃣Se crea el componente de links quee pueden ser textos o imagenes donde me van a conducir a otras vistas o páginas
def links() -> rx.Component:
    return rx.vstack(
        rx.button("Twitch", color="white", background_color="purple", padding_x="100px")
    )  # Esta es la forma de un botón simple


# Y queremos pintar botones pues vamos a la documentación de reflex
