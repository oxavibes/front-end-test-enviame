# front-end-test-enviame

En el ejercicio #1 y #2 hago uso del paquete runc-func para ejecutar un script escrito en node en la CLI.

## Instalacion

Debemos instalar runc-func de forma global

```bash
npm i -g run-func
```
Luego de instalarlo, si estamos usando una terminal integrada en VSCode debemos cerrarla y abrirla nuevamente.

## Uso
Una vez instalado nos situamos en la carpeta raiz del proyecto y ejecutamos en la CLI 

```bash
run-func index.js findPrimeNumbers start end
```
Donde findPrimeNumbers es la funcion, start y end son los dos argumentos que recibe la funcion.

## Ejemplo ejercicio #1

```bash
run-func index.js findPrimeNumbers 1 500
```

## Ejemplo ejercicio #2

```bash
run-func index.js init
```

Si no queremos instarlo de forma global tambien podemos hacer uso de runc-func a traves de un script en el package.json pero debemos modificar los parametros de forma manual en el script y luego llamarlo a traves de npm

## Ejemplo ejercicio #1

  "scripts": {
    "start": "run-func index.js findPrimeNumbers 1 1000"
  }
  
 Y luego ejecutar:
  
```bash
npm run start
```

## Ejemplo ejercicio #2

 "scripts": {
    "start": "run-func index.js init"
  }
  
 Y luego ejecutar:
  
```bash
npm run start
```

# Ejercicio #3

## Instalacion
Instalamos las depedencias necesarias

```bash
npm install
```
## Setup
Crear un archivo .env en la carpeta raiz del proyecto, siguiendo la estructura del archivo .env.example dejado como referencia.

```bash
VUE_APP_BASE_URL=https://gateway.marvel.com:443/v1/public // La url de la api a consumir
VUE_APP_PRIVATE_KEY=123 //Llave privada que nos facilita la misma api
VUE_APP_PUBLIC_KEY=123 /Llave publica que nos facilita la misma api
VUE_APP_TS=1000 //Timestamp necesario para generar el hash
VUE_APP_HASH=123 // Hash generado a traves de una generador md5 mediante la combinacion de (ts+privateKey+publicKey)
```

Nos dirigimos a un generador de hash md5 y pegamos los 3 campos juntos de la siguiente forma (tsprivateKeypublicKey). 
Nos arrojara un hash que se debe sostituir en la constante VUE_APP_TS de nuestro archivo .env

# Uso
Y por ultimo ejecutar

```bash
npm run serve
```









