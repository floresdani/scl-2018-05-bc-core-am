# Introducción

Bienvenid@s a **"Cefrado"**, una aplicación de cifrado y descifrado de texto, su nombre se debe a que utiliza el método de **Cifrado César**, que es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

Hemos creado esta aplicación para poder enviar mensajes entre tus amig@s y que otras personas no puedan saber qué significado tiene, puedes organizar eventos y/o cumpleaños sorpresa a tus seres queridos y ellos no podrán enterarse hasta el gran día de celebración. 

Respecto al diseño de la aplicación, es simple y con un pocos elementos visuales para que la atención del usuario se centre en su funcionalidad. Además de facilitar su visibilidad desde cualquier dispositivo.
Se eligió un diseño de fondo con formas geometricas en alusión a la naturaleza matemática del Cifrado César.

Antes de comenzar a usar **Cefrado**, debemos realizar la instalación y ejecución de la aplicación, como se explica a continuación.

## Instrucciones:
 
#### Descarga de aplicación

  1. Accede al siguiente [link](https://github.com/floresdani/scl-2018-05-bc-core-am)
  2. Descarga el repositorio haciendo click en el boton verde llamado "clone or download" a la derecha del mismo.
  3. Especifica el directorio para que lo puedas instalar en tu dispositivo personal.
  4. Descargarás un archivo `scl-2018-05-bc-core-am-master.zip`
  
#### Instala y ejecuta la aplicación

  1. Descomprime el archivo scl-2018-05-bc-core-am-master.zip usando tu aplicacion de descompresion preferida.
  2. Una vez descomprimido, abre la carpeta docs y ejecuta el archivo index.html.
  3. Se redireccionará a un enlace web de tu navegador predeterminado para que puedas comenzar a utilizar **Cefrado**.

## Cómo funciona Cefrado

**Cefrado** es una aplicación que te permite cifrar y decifrar mensajes de texto. 
La aplicación toma una cadena de texto ingresada por el usuario, y a partir de un número elegido (también por el usuario) desplazará el texto el mismo número de posiciones a la derecha, ocultando así el mensaje de modo que no pueda ser descifrado si no conoce el número para cifrar/decifrar.

Ejemplo: 
  * Número: 1
  * Texto a cifrar: HOLA, MUNDO!
  * Texto cifrado: IPMB, NVOEP!

En el ejemplo anterior, el texto cifrado se desplazó un espacio a la derecha ya que el usuario ingreso el número 1. Lo que significa un lugar de desplazamiento. 
Si el usuario ingresara el número 10, el método de cifrado/descifrado se hubiera desplazado 10 lugares a la derecha.
En caso de decifrar su desplazamiento es hacia la izquierda.

## Consideraciones

La aplicación actual representa un PMV (producto mínimo viable). Lo que quiere decir que es capaz de ejecutar la aplicación bajo ciertas normas.

* El texto a cifrar/decifrar deberá estar escrito en mayúsculas, de lo contrario, no funcionará la aplicación.
* El texto a cifrar/decifrar no reconoce ingresar caracteres expeciales (incluidos Ñ, á, $, !, -, etc).
* En caso de que no se cumpla ninguna de las condiciones anteriores, la aplicación devolverá el caracter ingresado sin cifrar.
* Para evitar que se produzca un inconveniente, recomendamos ingresar un número del 1 al 100, pero puede intentar con el número de desee.

Espero que puedan planear un muy evento y disfruten de nuestra primera aplicación.

                                            ¡Gracias!





