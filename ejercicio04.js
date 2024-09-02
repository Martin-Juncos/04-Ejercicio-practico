// Ejercicio: Completar la funcionalidad del servidor Express

const express = require("express");
const app = express();

// Middleware para parsear JSON
app.use();

// Definir una ruta GET que responda con un mensaje de bienvenida
// TODO: Completar la ruta "/welcome" para que responda con el mensaje "¡Bienvenido al servidor Express!"

app.get("/welcome", (req, res) => {
  // Pista: Usa res.send() para enviar el mensaje de respuesta.
  // Código incompleto: falta agregar la respuesta aquí.
});

// Definir una ruta POST que reciba un objeto JSON y responda con el nombre del usuario
// TODO: Completar la ruta "/user" para que reciba un JSON con un campo "name" y responda con "Hola, [name]!"

app.post("/user", (req, res) => {
  const { name } = req.body;
  // Pista: Asegúrate de extraer el "name" correctamente del cuerpo de la solicitud.
  // Código incompleto: falta agregar la respuesta aquí.
});

// Poner a escuchar el servidor en el puerto 3000
app.listen();
