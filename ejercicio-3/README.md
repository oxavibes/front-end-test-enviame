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
VUE_APP_HASH=123 // Hash generado a traves de un generador MD5 mediante la combinacion de (ts+privateKey+publicKey)
```

Nos dirigimos a un [generador](https://www.md5hashgenerator.com/) de hash md5 y pegamos los 3 campos juntos de la siguiente forma (tsprivateKeypublicKey).
Nos arrojara un hash que se debe sostituir en la constante VUE_APP_TS de nuestro archivo .env

# Uso

Y por ultimo ejecutar

```bash
npm run serve
```
