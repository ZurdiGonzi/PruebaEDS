# Edición de la portada en DA

La portada usa el bloque **Home**. El documento `index` se edita desde Document Authoring (DA) y el código del bloque se publica desde GitHub.

## Estructura correcta en DA

En DA, el bloque debe ser una tabla de **una columna** con esta estructura:

| Fila | Contenido |
| --- | --- |
| 1 | `home` |
| 2 | Los textos de la portada, con **un párrafo por texto** y en el orden indicado abajo |

> DA muestra la tabla como una cabecera `home` y una gran celda debajo. Es el formato normal de DA. No hace falta crear 39 filas físicas: pulsa **Enter** después de cada valor para crear un nuevo párrafo dentro de la segunda celda.

No añadas otro texto antes o después de la tabla.

## Orden de los párrafos en la segunda celda

Escribe o conserva estos 38 párrafos, uno debajo de otro y en este orden:

1. `ARCANE ATLAS`
2. `YOUR NEXT GREAT DECK`
3. `ARCANE ATLAS`
4. `A modern home for every card game strategist.`
5. `Decks`
6. `Cards`
7. `Creators`
8. `Advanced →`
9. `Search decks, commanders or creators`
10. `Search`
11. `NEW`
12. `Discover curated community collections`
13. `PLAY YOUR WAY`
14. `Whatever your strategy,`
15. `we have a place for it.`
16. `Build, tune, and share decks with a thriving community of players. Explore the formats you love and find fresh inspiration for your next game night.`
17. `DISCOVER FORMATS`
18. `Start your next brew`
19. `From casual tables to competitive play, there is a format waiting for you.`
20. `Commander`
21. `Build around a legendary leader and bring your story to the table.`
22. `Explore decks →`
23. `Modern`
24. `Powerful strategies, iconic cards, and a constantly evolving metagame.`
25. `Explore decks →`
26. `Standard`
27. `The newest cards and the most exciting ways to play them.`
28. `Explore decks →`
29. `Limited`
30. `Draft, discover, and make every pick count.`
31. `Explore decks →`
32. `READY TO PLAY?`
33. `Your deck is waiting.`
34. `Create a deck →`
35. `Toggle theme`
36. `Search`
37. `Open menu`
38. `Menu`

## Publicación

1. Guarda el documento `index` en DA.
2. Usa **Preview** para verificarlo.
3. Cuando se vea correctamente, usa **Publish**.
4. Comprueba:
   - Preview: `https://main--pruebaeds--zurdigonzi.aem.page/`
   - Live: `https://main--pruebaeds--zurdigonzi.aem.live/`

El código de `blocks/home/home.js` interpreta los párrafos de la celda de DA como valores independientes, respetando el orden anterior.
