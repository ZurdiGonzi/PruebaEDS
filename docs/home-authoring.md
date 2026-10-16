# Carrusel Home

El bloque **Home** reproduce el carrusel promocional de la primera sección de la página de inicio.

- En escritorio muestra **tres tarjetas**.
- Las flechas desplazan el carrusel **una tarjeta** a la izquierda o la derecha.
- En tablet muestra dos tarjetas y en móvil una.
- El orden de las filas en EDS UI determina el orden de las tarjetas.

## Crear el bloque en EDS UI

1. Añade un bloque llamado **Home** a la primera sección de la página.
2. Crea una fila por cada tarjeta. Para el diseño solicitado, crea cinco filas: `Element1` a `Element5`.
3. Edita cada fila siguiendo el modelo de tabla de abajo.
4. Publica la página para que el bloque y sus recursos queden disponibles.

## Estructura de cada fila

La **primera celda** contiene el texto de la tarjeta:

- Un encabezado (por ejemplo, `## Compra ofertas populares`).
- Una descripción opcional.
- Un enlace opcional, que puede actuar como CTA.

Las celdas restantes contienen las imágenes:

- **Una imagen:** tarjeta promocional grande (como Decoración u Ofertas de otoño).
- **De dos a cuatro imágenes:** cuadrícula de productos de dos columnas.
- El bloque usa como máximo cuatro imágenes por tarjeta.

> Para que una tarjeta se renderice, debe tener texto en la primera celda y al menos una imagen en una celda posterior.

## Ejemplo para cinco elementos

| Home |  |  |  |  |
| --- | --- | --- | --- | --- |
| ## Compra ofertas populares<br>[Ver las ofertas](https://www.amazon.es/) | ![Producto 1](./media/producto-1.png) | ![Producto 2](./media/producto-2.png) | ![Producto 3](./media/producto-3.png) | ![Producto 4](./media/producto-4.png) |
| ## Decoración del hogar<br>Descubre ahora<br>[Comprar](https://www.amazon.es/) | ![Salón decorado](./media/decoracion-hogar.png) |  |  |  |
| ## Ofertas de otoño<br>Ahorra esta temporada<br>[Ver ofertas](https://www.amazon.es/) | ![Productos de otoño](./media/ofertas-otono.png) | ![Producto extra 1](./media/otono-1.png) | ![Producto extra 2](./media/otono-2.png) | ![Producto extra 3](./media/otono-3.png) |
| ## Recién llegados<br>[Descubrir](https://www.amazon.es/) | ![Novedad](./media/recien-llegados.png) |  |  |  |
| ## Tus imprescindibles<br>[Comprar ahora](https://www.amazon.es/) | ![Imprescindible](./media/imprescindibles.png) |  |  |  |

## Edición desde EDS UI

Todo el contenido editable permanece en la tabla:

- Cambia títulos, descripciones y enlaces directamente en la primera celda de cada fila.
- Sustituye las imágenes desde las demás celdas y proporciona siempre texto alternativo descriptivo.
- Añade, elimina o reordena las filas para gestionar las promociones y su orden en el carrusel.
- Para cambiar entre una tarjeta de imagen grande y una cuadrícula, deja una sola imagen o añade de dos a cuatro imágenes, respectivamente.
- Sustituye, añade, reordena o elimina imágenes desde las celdas de imagen.
- Añade o elimina una fila completa para añadir o retirar una tarjeta del carrusel.
- Arrastra las filas para cambiar el orden en que aparecen las promociones.
- Si necesitas que una imagen navegue a una página, insértala dentro de un enlace desde EDS UI.

No es necesario modificar JavaScript ni CSS para actualizar textos, enlaces o imágenes.

## Arquitectura técnica

Las cinco promociones continúan dentro del bloque `home`, porque comparten el carrusel y sus flechas. Los diseños especiales se separan internamente para evitar duplicar el carrusel:

- `blocks/home/home.js` y `blocks/home/home.css`: carrusel, tarjeta estándar de una imagen y controles.
- `blocks/home/variants/product-grid/product-grid.js`: variante de cuadrícula de dos columnas utilizada cuando una fila contiene entre dos y cuatro imágenes.
- `blocks/home/variants/product-grid/product-grid.css`: estilos exclusivos de esa cuadrícula.

Por tanto, Element1 y Element3 usan la variante `product-grid`; las filas con una sola imagen utilizan la tarjeta estándar. Si se necesita un nuevo diseño especial, se añade otra carpeta dentro de `blocks/home/variants/`, sin convertirlo en un carrusel independiente.
