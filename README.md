# Ejercicio Práctico Integrador 04

## Consigna

En este ejercicio, trabajarás con un servidor básico utilizando **Express.js**. El objetivo es completar el código para que el servidor funcione correctamente según las consignas especificadas.

### Tareas

1. **Ruta GET**:

   - Completa la ruta `GET /welcome` para que responda con el mensaje "¡Bienvenido al servidor Express!".

2. **Ruta POST**:

   - Completa la ruta `POST /user` para que reciba un objeto JSON con un campo `name` y responda con "Hola, [name]".

3. **Tips**:

   - Usa `res.send()` para enviar respuestas en texto plano.
   - Asegúrate de que `req.body` esté bien configurado para manejar JSON.

4. **Ejecución**:
   - Ejecuta el servidor con `node ejercicio04.js` y prueba las rutas con herramientas como Postman o curl.

## Objetivo

Este ejercicio te ayudará a afianzar los conceptos básicos de Express.js, incluyendo la creación de rutas y el manejo de solicitudes con JSON.
