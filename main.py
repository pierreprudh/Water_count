from fastapi import FastAPI
from reactpy import component, html
from reactpy.backend.fastapi import configure


@component
def Photo():
    return html.section(
        html.h1("KDnuggets Blog Featured Image"),
        html.p(html.b("KD"), " stands for:"),
        html.ul(html.li("K: Knowledge"), html.li("D: Discovery")),
        html.img(
            {
                "src": "https://www.kdnuggets.com/wp-content/uploads/about-kdn-header.jpeg",
                "style": {"width": "50%"},
                "alt": "KDnuggets About Image",
            }
        ),
    )


app = FastAPI()
configure(app, Photo)

run(Photo)