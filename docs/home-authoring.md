# Bloques promocionales de la página de inicio

Las promociones se crean como bloques EDS independientes. El nombre del bloque en el documento debe coincidir con el nombre de su carpeta dentro de `blocks/`. No uses nombres genéricos como `Element1`, porque EDS intentará cargar `blocks/element1/element1.js` y `blocks/element1/element1.css`.

## Bloque `quad`: título y cuadrícula de productos

Añade un bloque llamado **Quad** en EDS UI. El bloque usa:

- La primera fila para el título y el texto introductorio opcional.
- Cada fila posterior para un producto: imagen en una celda y descuento (por ejemplo, `-14%`) en otra.

La cuadrícula coloca los productos en dos columnas. Se recomienda añadir cuatro filas de producto para formar una cuadrícula 2 × 2.

| Quad |  |
| --- | --- |
| ## Compra ofertas populares |  |
| ![Objetivo de cámara](./media/camara.png) | -14% |
| ![Figura de acción](./media/figura.png) | -24% |
| ![Taladro](./media/taladro.png) | -21% |
| ![M&M's](./media/dulces.png) | -22% |

El descuento es opcional. Si se omite, la imagen se muestra sin etiqueta.

## Bloque `simple`: imagen con texto superpuesto

Añade un bloque llamado **Simple** en EDS UI. Incluye una imagen y el texto que debe aparecer sobre ella. El texto puede contener un encabezado, una descripción y un enlace opcional.

| Simple |  |
| --- | --- |
| ## Decoración del hogar<br>Descubre ahora | ![Salón decorado](./media/decoracion-hogar.png) |

El bloque muestra la imagen como fondo a tamaño completo y el texto en la parte superior. Para asegurar buen contraste, usa imágenes con espacio visual detrás del texto o una zona superior oscura.

## Publicación y estilos

Publica la página después de crear o editar los bloques. El nombre del bloque determina la carga automática de su módulo y su hoja de estilos:

- `blocks/quad/quad.js` y `blocks/quad/quad.css`
- `blocks/simple/simple.js` y `blocks/simple/simple.css`

Las carpetas deben estar en el repositorio publicado para que EDS pueda cargarlas. Si el nombre de bloque de la tabla y el nombre de carpeta no coinciden, el navegador devolverá 404 para los recursos del bloque.
