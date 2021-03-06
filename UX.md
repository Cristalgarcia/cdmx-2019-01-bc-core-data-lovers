# Proyecto LoL Data, UX Desing

## Introducción
El mercado de los videojuegos se ha convertido en una de las industrias más rentables y atractiva en la última década. Sólo en México, el mercado de los videojuegos registró en 2018 ingresos por más de mil millones de dólares, ubicándolo en la posición 12 del ranking mundial y la primera posición de Latinoamérica.

Uno de los videojuegos de mayor crecimiento en América Latina ha sido League of Leagends también conocido por sus siglas como LoL. Actualmente suma más de 100 millones de jugadores. Es un juego del género multijugador en línea; consiste en dos equipos de campeones, cada uno con un diseño y estilo de juego único y los cuales compiten cara a cara a través de diversos campos de batalla y modos de juego.

LoL cuenta con más de 100 campeones que se adaptan a cada estilo de juego, haciéndolo un videojuego de estrategia por ser necesario elegir el campeón con base en su posición y características específicas para un buen desarrollo en el juego.

**LoL Lovers** es una aplicación para desktop y mobile dirigida a los usuarios que están iniciando en el juego y quienes buscan información básica y a gran escala de las características principales de los campeones para una elección correcta de rol. 

## Definición del producto
Para el desarrollo del producto se realizó una investigación para definir el segmento al que estaría dirigido, conocer sus necesidades entorno al videojuego LoL y sus expectativas de diseño de interfaz para una nueva aplicación.

- Primera etapa: Se analizó la data brindada por Laboratoria, conformada por información específica de 133 campeones de LoL. El objetivo fue identificar las áreas de oportunidad para el desarrollo de la aplicación y los posibles usuarios. Se situaron dos segmentos, jugadores expertos, y amateurs, por lo que fue necesario desarrollar encuestas entre jugadores activos de LoL que permitieran conocer las áreas de oportunidad, sus experiencias y las áreas de oportunidad de una nueva aplicación. 

- Segunda etapa: Se realizaron un total de 11 encuestas el día 29 de enero de 2018 entre jugadores activos de LoL, a través de un cuestionario formulado en [Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSexeI9z0Wul5JzPcVLkAkzXL47iqwXJNGrPQdLxwhnmKavTIw/viewform?usp=sf_link). La encuesta consistió de doce preguntas entorno a la información general de los jugadores, intereses concretos sobre LoL, aspectos de diseño y expectativas del usuario ante una nueva aplicación del videojuego.

## Análisis de la información
- El 73% de los jugadores son hombres y el 24% son mujeres.
- La edad promedio es 27 años.
- Las personas tienen un promedio de 3 años y medio jugando LoL.
- Los usuarios gustan del juego por su historia, ser de estrategia y para pasar tiempo de ocio. 
- Los principales indicadores que los usuarios buscan en sitios con relación a LoL son: Estadísticas, buids, runas y counters.
- Las características que les gustaría filtrar por campeón refieren a nombre, roles y daño.  
- Los colores con los que asocian a LoL son azul, dorado y negó.
- El 55% de los encuestados les gustaría que la información se muestre en tarjetas y el 45% prefiere las gráficas.

## Definición de usuario
Con base en la información obtenida en las encuestas e información de la data de LoL, el segmento objetivo son jugadores que están iniciando en el juego y buscan información básica de los campeones para desarrollar su estrategia, ya que las personas con mayor experiencia buscan datos de mayor especificidad con la que no se cuenta acceso y está actualizándose de manera constante.

### Perfil

Edad: 21 a 27 años                                       
Género: Masculino                                          
Ubicación: México                                             
Intereses: Jugar videojugos para pasar el tiempo de ocio      
Objetivo: Buscar información para mejor estrategía de juego


## Producto
En LoL Lover podrás encontrar:
- Filtro para buscar los campeones por sus seis roles: Tank, Fighter, Mage, Assain, ADC y Support.
- Ordenar los campeones de mayor a menor, y de menor a mayor dificultad.
- Buscador para encontrar el perfil del campeón por su nombre. 
- Obtener información detallada de cada uno de los campeones al hacer click en su imagen. 
- Consulta de estadísticas promedio de los campeones. 

## Funcionalidad
El sitio web tiene como objetivo brindar la información indispensable para elegir el campeón adecuado antes de iniciar el juego. Los datos brindados están basados en los indicadores que jugadores experimentado consideran relevante. LoL Lover tiene la funcionalidad de ser un sitio de consulta con información breve y útil, con una interfaz clara, sencilla y que mantenga la esencia del videojuego.

## Proceso de sketching
- **Prototipo de baja fidelidad.** El diseño de la página web se realizó pensando en mobile firts. La elaboración del boceto fue usando papel y lápiz. La interfaz contó con dos pantallas; la primera mostraba como background un wallpaper del videojuego y en la parte inferior un botón de comenzar. La segunda pantalla presentó un burguer botton para desplegar 5 secciones: consultar el rol de los campeones, búsqueda por nombre, obtención de cuatro indicadores de mayor relevancia; información detallada de los campeones junto con sus estadísticas en gráficas. 

![Prototipo](https://github.com/Cristalgarcia/cdmx-2019-01-bc-core-data-lovers/blob/rama-cris/src/assets/prototipo%20de%20baja%20fidelidad.jpeg)

![Prototipo](https://github.com/Cristalgarcia/cdmx-2019-01-bc-core-data-lovers/blob/rama-cris/src/assets/prototipo%20de%20baja%20fidelidad_2.jpeg)

- **Prototipo de alta fidelidad.** El sketch se realizó en [Figman](https://www.figma.com/proto/ciJPALOwmDoRxJ62H0xwpyd6/LoL-Prototipo?node-id=1%3A2&scaling=scale-down). La primera pantalla mantuvo el diseño del prototipo de baja fidelidad. La segunda pantalla, Home, brinda información general de LoL (objetivo, mapa del videojuego y comandos del juego). El menú consta de tres secciones; personajes, roles y poderes. Cuenta con un buscador y cada uno de los campeones tienen una tarjeta complementaria con información adicional. 

## Diseño de la interfaz de usuario
El diseño establecido presentó modificaciones al realizar el testeo con usuarios. La primera pantalla fue eliminada con la intención de mantener toda la información en una página. La información del videojuego fue retirada, optando por desplegar las tarjetas de todos los campeones y acceder más rápido a la información. Las secciones pasaron de tres a cuatro, modificadas acorde a los requerimientos del proyecto y las necesidades de los usuarios. El buscador por nombre se fijó en todas las secciones y no solo en dos, debido a que los usuarios prefirieron tener acceso al buscador en cualquier momento. En Home se integró el objetivo del sitio ya que un usuario no comprendía el objetivo del sitio. A todas las secciones se les colocó el nombre correspondiente para identificar en donde se está posicionado, ya que los usuarios se perdían al no saber de qué era la información mostrada. 

### Paleta de colores 
La paleta de colores corresponde a los utilizados en el juego LoL (azul, negro, dorado y blanco). Los códigos de colores utilizados en el Css son: rgb(131, 109, 13); rgba(0, 0, 0, 0.9); #cc9900; #ffffff; #000000; #4f5b66.

### Tipografía 
La tipografía seleccionada corresponde a la familia **adobe-garamond-pro**, la cual mantiene el mismo estilo tipográfico utilizado en el videojuego, con el objetivo de generar una similitud y dar la sensación de ser una extensión del juego.

## Interfaz 
El sitio web está disponible para desktop y mobile contando con un diseño responsive por lo que su navegación se adapta a diversos dispositivos. 

### Desktop
![desktop](https://github.com/Cristalgarcia/cdmx-2019-01-bc-core-data-lovers/blob/rama-cris/src/assets/Interfaz_desktop.PNG)

### Mobile
![mobile](https://github.com/Cristalgarcia/cdmx-2019-01-bc-core-data-lovers/blob/rama-cris/src/assets/Interfaz_mobile.PNG)

# Análisis heurístico
El sitio LOL LOVERS presentó una evaluación de interfaz para analizar la usabilidad y el objetivo de negocio de la aplicación con la finalidad de desprender una propuesta de mejora. 

### Visibilidad del estado de sistema
El sitio LOL LOVERS no presenta elementos hovers que informen al usuario de lo que está haciendo o en qué sección está ubicado.

### Conexión entre el sistema y el mundo real
LOL LOVERS utiliza los mismos términos que el videojuego League of Legends para que los usuarios muestren una relación con éste. El diseño está basado en la interfaz de videojuego. Utiliza representaciones gráficas claras y convenciones que crean homogeneidad en el sitio.

### Uso y control del usuario
El sitio web carece de comandos que permitan al usuario regresar a secciones previas generando la necesidad de ubicarse de nueva cuenta en el inicio de una sección. El usuario pierde el control en el flujo de la información al realizar acciones adicionales y más scroll.

### Consistencia y estándares 
El logo ubicado en la parte superior izquierda suele asociarse con la ejecución de una acción, sin embargo, el texto “Home” es el que presenta una acción. Para el usuario genera confusión y resalta una falta de consistencia. 
Las tarjetas al cliquearlas despliegan información detallada del campeón.
El diseño de interfaz guarda una consistencia entre dispositivos.

### Prevención de errores
El buscador por nombre no presenta un mensaje que indique cuando el texto ingresado no corresponde con los resultados de búsqueda. Tampoco existe un mensaje de error ante un problema de información en las secciones.

### Reconocimiento en lugar de recuerdo 
Las secciones de LOL LOVERS presentan un nombre clave para indicar el objetivo o el contenido que despliega. El buscador tiene un placeholder de instrucción. 
Las tarjetas con el nombre de los campeones despliegan información adicional al realizar un click sobre éstas, ya que los usuarios están acostumbrados en obtener más datos de estos elementos.

### Uso eficiente y flexibilidad
El diseño de la página está basado en los sitios web oficiales del juego y en la interfaz del mismo con el objetivo de capturar la esencia y una asociación. La paleta de colores, imágenes y estructura de los elementos mantiene correlación con el juego y peticiones de los usuarios. 
La información incorpora algunos de los elementos señalados por jugadores experimentados y datos que pueden ser de utilidad y de fácil manejo para los jugadores que están iniciando. 

### Diseño práctico y minimalista 
El diseño es práctico al no utilizar elementos innecesarios para obtener información. La información no contiene datos irrelevantes que entorpezca el flujo de navegación. 

### Ayuda, diagnóstico y recuperación de errores
El sitio web ante un error no le indica al usuario qué ha pasado y cómo resolverlo.

### Ayuda y documentación
El sitio web LoL Lover no proporciona documentación o información enfocada en la tarea del usuario. 

### Interacción con el usuario placentera y respetuosa 
El objetivo del sitio web es facilitar a los jugadores principiantes información clave para un buen desempeño en el juego.

# Pruebas de usabilidad
El día viernes 22 de febrero de 2019, el sitio web LoL Lover fue mostrado a tres personas para que evaluar la usabilidad de la página. Los datos recabados fueron:

- Los usuarios al navegar realizaron click en el icono de LoL ubicado en el lado superior izquierdo, sin embargo, era el texto Home el que realizaba la acción.
- La tarjeta de los campeones con información complementaria mostraba bordes para agrupar información. Una usuario señaló que dicho bordes los interpretaba cómo botones y con ello los cliqueo.
- Cuando los usuarios ingresaban a la sección de Average Stats, los usuarios enfocaban más atención al dato mostrado debido a que es poco entendible. 
- Los usuarios indicaron que las secciones eran claras.

## Moficaciones
Acorde al análisis heurístico y pruebas de usabilidad se realizaron los siguientes cambios:

- El texto Home que ejecutaba la acción de mostrar todos los campeones fue eliminado para ser asignado al icono del juego.
- El placeholder del buscador fue editado para especificar la instrucción.
- El color del menú cambio por un negro sólido para generar más contraste y evitar destellos blancos que causaran ruido en su lectura.
- El background-image conformado por un wallpaper del juego fue modificado por un fondo negro con textura debido a que la anterior imagen mostraba un texto que era obstruido por el contenido y era difícil de leer.
- El footer presenta dos secciones nuevas para brindar información complementaria del juego. 


![Home]

- Las tarjetas de información de los campeones presentaron como cambio la eliminación de bordes para no ser interpretados como botones.

![Tarjetas]

