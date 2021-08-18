# Project 0 => Curly Coder Blog: Mobile Programming.

## Elaborado por Eduardo Castellón.

Curly Coder Blog es mi propuesta de Project 0 para WEB50Xni. Se trata de un blog que funcione como guía sobre como comenzar en la programación móvil para aquellos que no conozcan nada y deseen comenzar o para aquellos quienes tienen nociones básicas pero aún así tengan cierta confusión a la hora de comenzar.


## Estructura y Descripción

### A nivel de código, está estructurado por las siguientes páginas estáticas según su nombre HTML5:

1. Index.html
  * Página principal que funciona como HomePage para el blog
2. WhatIs.html
  * Pagina que explica conceptos básicos del tema del blog, primer sección que puede ser redirigida desde Index.html
3. Clasification.html
  * Pagina que especifica la clasificación de la programación móvil, segunda sección que puede ser redirigida desde Index y desde WhatIS.html
4. Pop.html
  * Pagina que lista las tecnologías mas populares de programación móvil, tercer sección que puede ser redirigida desde Index y desde Clasification.html
5. Stats.html
  * Pagina que demuestra según datos de Statista, que tecnologías son las mas usadas, cuarta sección que puede ser redirigida desde Index y desde Pop.html

### Estos códigos html consumen los estilos desde 3 hojas SCSS procesadas posteriormente a CSS las cuales son:
1. Index-style.scss 
  * Contiene los estilos principales aplicados a todos los HTML tales como paletas de colores, estilos de contenedores, fotos, botones y cards
2. Sections-stlye.scss
  * Contiene estilos específicos para cada sección tales como los botones de redirección
3. Scroll-animations.scss
  * Contiene animaciones para aplicarse en scroll
 
 ### Usamos código JavaScript en ES6 (EcmaScript 6)
 * Scripts.js para:
  * Detectar la ubicación del viewport del dispositivo y así activar los estilos de aparación en ese instante
  * Detectar la ubicación en eje Y de la página para cambiar clase del navbar y ubicarla abajo en caso de pasar y > 300 o al inicio de ser y < 300
  * Botón para devolver al inicio del documento
