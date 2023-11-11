import reflex as rx
import reflex_web_link_bio.styles.styles as styles


# 8️⃣ Estamos creando un nuevo componente que me va a crear botones link con iconos para las redes sociales
def link_icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link",
        ),
        # 8️⃣🅰 Vamos a darle los mismos parametros para que se vuelva link botón como el el fichero con el mismo name
        href=url,
        is_external=True,
    )


# 8️⃣🅱 Ahora los vamos a importar en el fichero heade
