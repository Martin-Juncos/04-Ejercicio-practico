const express = require("express");
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET que responde con un mensaje de bienvenida
app.get("/welcome", (req, res) => {
  res.send("¡Bienvenido al servidor Express!");
});

// Ruta POST que recibe un objeto JSON y responde con el nombre del usuario
app.post("/user", (req, res) => {
  const { name } = req.body;
  res.send(`Hola, ${name}!`);
});

// Poner a escuchar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

// Explicación de la solución:
// - La ruta `GET /welcome` se completó usando `res.send()` para enviar un mensaje simple.
// - La ruta `POST /user` fue completada para extraer el campo "name" del cuerpo de la solicitud JSON usando `req.body`, y luego responder con un saludo personalizado.
// - Se utilizó `express.json()` para asegurarse de que las solicitudes con JSON se manejen correctamente.
