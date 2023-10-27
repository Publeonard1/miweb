import reflex as rx


# 4️⃣ Se crea este nuevo fichero dentro de la capr, components y quiero que este botón sea especial
# Se crea como un componente normal, Antes me estaba retornando con return rx.button("Twich") Ahora lo quiero customizar
# Pero antes de hacerlo especial tengo que importar el fichero link_button en el fichero de links 4️⃣🅰


# Ahora quiero darle parámetro de texto a la función tipo text: str
def link_button(text: str, url: str) -> rx.Component:
    # Con este argumento le indica que reciba el texto que quiera realizar
    return rx.link(rx.button(text), href=url, is_external=True)


# "Twitch", color="white", background_color="purple", padding_x="100px"
