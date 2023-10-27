import reflex as rx
import datetime


# 5️⃣ Guardando e importando el footer en index
def footer() -> rx.Component:
    return rx.vstack(
        # pintar imagenes o diferentes elemnetos
        rx.image(src="favicon.ico"),
        # Ahora quiero que ese texto sea un link y que me actualice el año importando la libreria date
        rx.link(
            f"© 2021-{datetime.date.today().year}. Desde la vinculación en la rama",
            href="https//github.com/Publeonar1",
            is_external=True
            # Toma al is_external para que me abra en otra pestaña
        ),
        rx.text(
            "Pie de página del link_bio",
        ),
    )


# interpolando --> f"{}"
