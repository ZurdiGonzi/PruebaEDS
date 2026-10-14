# Edición de la portada sin código

La portada usa el bloque **Home**. Todo el texto visible procede de su contenido editorial: no se debe modificar `blocks/home/home.js` ni `blocks/home/home.css` para cambiar textos.

## Crear o editar la página en Google Docs / SharePoint

1. Abre el documento que corresponde a la página raíz (`/`) en la fuente de contenido conectada a EDS.
2. Inserta una tabla de **una columna**.
3. Escribe `Home` en la primera celda (cabecera de la tabla).
4. Añade el resto de filas exactamente en el orden siguiente.
5. Modifica únicamente el texto de la celda que quieras actualizar.
6. Previsualiza y publica el documento desde el flujo de EDS.

> Cada fila equivale a un texto visible de la portada. No se necesitan conocimientos de HTML, JavaScript o CSS.

| Orden | Texto que controla |
| --- | --- |
| 1 | Marca / nombre situado en la navegación |
| 2 | Antetítulo del hero |
| 3 | Título principal del hero |
| 4 | Subtítulo del hero |
| 5 | Etiqueta de pestaña 1 |
| 6 | Etiqueta de pestaña 2 |
| 7 | Etiqueta de pestaña 3 |
| 8 | Enlace de búsqueda avanzada |
| 9 | Texto de ayuda dentro del buscador |
| 10 | Texto del botón del buscador |
| 11 | Insignia informativa |
| 12 | Texto informativo junto a la insignia |
| 13 | Antetítulo de introducción |
| 14 | Primera línea del título introductorio |
| 15 | Segunda línea destacada del título introductorio |
| 16 | Párrafo introductorio |
| 17 | Antetítulo de formatos |
| 18 | Título de formatos |
| 19 | Descripción de formatos |
| 20 | Título de tarjeta 1 |
| 21 | Descripción de tarjeta 1 |
| 22 | Llamada a la acción de tarjeta 1 |
| 23 | Título de tarjeta 2 |
| 24 | Descripción de tarjeta 2 |
| 25 | Llamada a la acción de tarjeta 2 |
| 26 | Título de tarjeta 3 |
| 27 | Descripción de tarjeta 3 |
| 28 | Llamada a la acción de tarjeta 3 |
| 29 | Título de tarjeta 4 |
| 30 | Descripción de tarjeta 4 |
| 31 | Llamada a la acción de tarjeta 4 |
| 32 | Antetítulo de la llamada final |
| 33 | Título de la llamada final |
| 34 | Texto del botón final |
| 35 | Etiqueta accesible del botón de tema |
| 36 | Etiqueta accesible del botón de búsqueda del menú |
| 37 | Etiqueta accesible del botón de menú |
| 38 | Texto visible del botón de menú |

## Contenido inicial de la tabla

Copia estas 39 filas en la tabla; la primera fila es la cabecera del bloque.

| Home |
| --- |
| ARCANE ATLAS |
| YOUR NEXT GREAT DECK |
| ARCANE ATLAS |
| A modern home for every card game strategist. |
| Decks |
| Cards |
| Creators |
| Advanced → |
| Search decks, commanders or creators |
| Search |
| NEW |
| Discover curated community collections |
| PLAY YOUR WAY |
| Whatever your strategy, |
| we have a place for it. |
| Build, tune, and share decks with a thriving community of players. Explore the formats you love and find fresh inspiration for your next game night. |
| DISCOVER FORMATS |
| Start your next brew |
| From casual tables to competitive play, there is a format waiting for you. |
| Commander |
| Build around a legendary leader and bring your story to the table. |
| Explore decks → |
| Modern |
| Powerful strategies, iconic cards, and a constantly evolving metagame. |
| Explore decks → |
| Standard |
| The newest cards and the most exciting ways to play them. |
| Explore decks → |
| Limited |
| Draft, discover, and make every pick count. |
| Explore decks → |
| READY TO PLAY? |
| Your deck is waiting. |
| Create a deck → |
| Toggle theme |
| Search |
| Open menu |
| Menu |

## Publicar

- En Google Docs: usa el plugin/flujo de EDS de tu organización para **Preview** y después **Publish**.
- En SharePoint: guarda/publica el documento mediante la integración EDS de tu organización.
- El código del bloque se publica desde Git; los textos se actualizan desde el documento editorial.

El documento debe mantener el orden de las filas. Si se borra una fila o se cambia el orden, el texto se desplazará a otro elemento de la portada.
