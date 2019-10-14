# README

El adjunto es el código fuente de la solución creada para el examen de MELI, el cual contempla una pagina web en donde es posible realizar consultas de ADN, ingresando en un area de texto una cadena en formato JSON, y en una API con un POST el que permite ingresar una cadena de ADN para validar si es mutante o humano, un GET que devuelve el conteo de humanos, mutantes y propoción de estos.

## WEB

### Validar mutante

Se debe ingresar en la siguiente URL:

```
https://fit-reducer-255213.appspot.com
```

Se muestra un area de texto en donde se debe ingresar la cadena DNA en formato JSON como se muestra en el ejemplo:

```
{ "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }
```

Como respuesta arrojará una alerta indicando si es mutante o no.

## API

Se genero una API que permite validar mutantes y consultar estadisticas de las cadenas DNA que se han ingresado.

Metodo para validar mutante, se registra en la base de datos el resultado de la validacion mutante.

### POST /mutant

#### Request
```
DNA; Cadena DNA en formato JSON. Debe contener un arreglo de 6 cadenas de texto, cada cadena de text debe contener un largo de 6 caracteres. Requerido.
```

#### Response
```
Status; Si la cadena ingresada es mutante devuelve status 200 OK, si es humano devuelve estatus 403 Forbidden
```

### Example

Ingreso de cadena DNA con resultado **mutante**
#### Request
```
DATA:  { "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }
```
#### Response
```
200 OK
```

Ingreso de cadena DNA con resultado **humano**
#### Request
```
DATA: { "dna":["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"] }
```
#### Response
```
403 Forbidden
```

Método para obtener estadísticas de las cadenas DNA ingresadas
### GET /stats

No necesita parámetros para la ejecucion de este método.
Responde el número de mutantes ingresados, número de humanos ingresados y la proporción de humanos por mutantes

### Example

#### Response
```
{
"count_mutant_dna":7
"count_human_dna":9
"ratio":0.7777777777777778
}
```
