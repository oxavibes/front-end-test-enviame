# Ejercicio #1

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

## Ejemplo

```bash
run-func index.js findPrimeNumbers 1 500
```

Si no queremos instarlo de forma global tambien podemos hacer uso de runc-func a traves de un script en el package.json pero debemos modificar los parametros de forma manual en el script y luego llamarlo a traves de npm.

## Ejemplo

"scripts": {
"start": "run-func index.js findPrimeNumbers 1 1000"
}

Y luego ejecutar:

```bash
npm run start
```
