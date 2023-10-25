import reflex as rx


# Como hacemos un componente con una funicón
def navbar() -> rx.Component:  # Copio el componente que se hizo prviamente
    return rx.hstack(  # Si o si tiene que tener un return para que nos muestre en pantalla lo que se ha hecho
        rx.text("Publeonard", height="40px", color="White"),
        position="stichy",
        bg="#3a12fa",  # Color de la barra
        padding="12px",  # Nos indica marcar espacios hacía afuera
        z_index="999",  # Que va estar simepre en la parte superior
    )


# Hemos creado nuestro primer componente pero antes hay que importarlo
