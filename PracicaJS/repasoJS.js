/*
    -Tipo de datos
      Cadenas de texto(strings):
                          "Holaa"
                          'Holaa'
                          `Holaa` => permite evaluar operaciones usando ${...}.
                                      Ejemplo: `tengo ${10 + 4} años` = "tengo 14 años"

      Numeros(number)
                  0, 12, 12435, 1123.233

      True/False(boolean)
                  True - False

      Null:
          Representa la ausencia intencional de cualquier objeto o valor.
          Es un valor único que indica la falta de valor.

      Undefined:
        Representa una variable que ha sido declarada pero no
        ha sido asignada con ningún valor. Si una variable no
        se ha inicializado, su valor es undefined.


    -Variables
        una variable es un contenedor que se utiliza para almacenar valores.

        se utiliza las palabras clave let o const, seguida del nombre que
        le quieres dar a la variable. Por ejemplo:

        let apellido = camello
        const PI = 3.14

        Con el "=" se le asigna un valor a las variables
        a las constantes (const) no se les puede cambiar el valor


    -Arrays
       los arrays son estructuras de datos que se utilizan para almacenar y organizar múltiples
       valores en una sola variable. Un array puede contener cualquier tipo de datos, como
       números, cadenas de texto, objetos, booleanos, etc. Los elementos de un array se almacenan
       en posiciones numéricas llamadas índices, comenzando desde el índice 0.

       Los arrays se indican con corchetes =  [... contenido ....]

       EJEMPLO:
        let listaDeNumeros = [12,21,22,1]

      Para acceder al valor de un array se usa tambien [] al final de la variable
      indicando el indice que nos interesa (recordar que el primer elemento es el numero 0)

      EJEMPLO:
        listaDeNumeros[0] == 12
        listaDeNumeros[1] == 21
        listaDeNumeros[2] == 22
        listaDeNumeros[3] == 1


    -Operadores
        Operadores de strings:
          +  cuando hablamos de cadenas de texto el operador "+" se usa para concatenarlas.
              por ejemplo:  "Hola" + " " + "chau" === "Hola chau"

        Operadores de numberos
          +  Cuando se trata de numeros, los suma, EJ 5 + 5 === 10
          *  Multiplica los numeros EJ  5 * 5 === 25
          -  Resta los numeros EJ   5 - -5 === 0
          /  Divicion entre los numeros  10 / 2 === 5
          ** Elevar a la potencia 3 ** 3 === 27
          %  Modulo entre los numeros  12 % 2 === 0

        Operadores de booleanos
          ==  Igual en valor           5 == "5" --> true
          === Igual en valor y tipo    5 === "5" --> false
          <   menor que                4 < 12 --> true
          <=  menor o igual que        7 <= 20 --> true
          >   mayor                    4 > 4 --> false
          >=  mayor o igual que        3 >= 6 --> false
          !   negacion                 !true --> false


    -Controles de flujo
       IF
        estructura:
          if ([Condicion]) {
            [Codigo a ejecutar si condición es true]
          }

       IF-ELSE
        estructura:
          if ([Condicion]) {
            [Codigo a ejecutar si condición es true]
          } else {
            [Codigo a ejecutar si condición es false]
          }

       SWITCH
        estructura:
            switch ([Evaluar]) {
              case [Machea evaluacion]:
               [Contenido a ejecutar]
                break;

              case [Machea evaluacion]:
               [Contenido a ejecutar]
                break;

              default:
               [Contenido a ejecutar si no matchea nada]
                break;
            }


    -Loops
      WHILE
        while (condición) {
          Bloque de código a repetir
          Se ejecuta siempre que la condición sea verdadera
          NOTA: si la condición nunca cambia a false se crea un loop infinito
        }

      FOR
        for (inicialización; condición; actualización) {
          // Bloque de código a repetir
        }

        ejemplo
          for (let i = 0; i < 5; i++) {
            valor = valor + i
          }


    -Funciones
        las funciones son bloques de código que pueden recibir valores de entrada
        (parámetros), realizar operaciones y devolver un resultado (valor de retorno).
        Las funciones se utilizan para agrupar lógica relacionada y reutilizable en un programa.

      Ejemplo
        function nombreFuncion(parametro1, parametro2, ...) {
          Cuerpo de la función
          Instrucciones a ejecutar
          Puede incluir declaraciones de variables, bucles, condicionales, etc.
          tiene a disposición los valores pasados por parametro
          return resultado; // Opcional: devuelve un valor
        }

        Luego para llamar y ejecutar la funcion simplemente se escribe
        nombreFuncion(3, 4, ...)
*/
